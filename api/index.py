import logging
from typing import Annotated, Optional

from fastapi import FastAPI, Query
from openai import OpenAI
from pydantic import BaseModel
from pydantic_settings import BaseSettings
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address
from starlette.requests import Request

from .prompt import create_user_prompt, create_assistant_prompt, get_theme_temperature

logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    OPENAI_API_KEY: str = "OPENAI_API_KEY"
    KV_URL: str = "KV_URL"

    class Config:
        env_file = ".env.development.local"
        extra = "ignore"


class ApiResponse(BaseModel):
    nicknames: list[str]


settings = Settings()
client = OpenAI(api_key=settings.OPENAI_API_KEY)

limiter = Limiter(key_func=get_remote_address)
app = FastAPI(
    title="Pokemon Nickname Generator",
    description="Simple API that generates Pokemon nicknames using AI.",
    version="0.1.0",
)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


@app.get("/api/generate")
@limiter.limit("5/minute")
def generate_nickname(
        request: Request, # noqa - needed for limiter
        pokemon: Annotated[str, Query(max_length=12, min_length=3)],
        max_length: Annotated[int, Query(ge=10, le=20)] = 10,
        theme: Annotated[Optional[str], Query(max_length=25, min_length=3)] = None,
        amount: Annotated[int, Query(ge=1, le=5)] = 5
):
    assistant_prompt = create_assistant_prompt(theme)
    temperature = 1.2 if theme is None else get_theme_temperature(theme)
    user_prompt = create_user_prompt(pokemon, amount, max_length)
    logger.info(
        f"Assistant prompt: {assistant_prompt}\nUser prompt: {user_prompt}\nTemperature: {temperature}"
    )
    print(assistant_prompt)
    open_ai_response = client.chat.completions.create(
        model="gpt-4.1-mini",
        response_format={"type": "json_object"},
        temperature=temperature,
        messages=[
            {"role": "assistant", "content": assistant_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )
    content = open_ai_response.choices[0].message.content
    nicknames = ApiResponse.model_validate_json(content)
    return nicknames
