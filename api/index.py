import logging
from typing import Annotated, Optional

import redis.asyncio as redis
from fastapi import FastAPI, Query, Depends
from openai import OpenAI
from pydantic import BaseModel
from pydantic_settings import BaseSettings
from fastapi_limiter import FastAPILimiter
from fastapi_limiter.depends import RateLimiter

from .prompt import create_user_prompt, create_assistant_prompt

logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    OPENAI_API_KEY: str = "OPENAI_API_KEY"
    KV_URL: str = "KV_URL"

    class Config:
        env_file = ".env.development.local"
        extra = "ignore"


class OpenAiResponse(BaseModel):
    nicknames: list[str]


settings = Settings()
client = OpenAI(api_key=settings.OPENAI_API_KEY)

app = FastAPI(
    title="Pokemon Nickname Generator",
    description="Simple API that generates Pokemon nicknames using AI.",
    version="0.1.0",
)


@app.on_event("startup")
async def startup():
    # Replace the redis connection name with rediss:// for SSL
    redis_url = settings.KV_URL.replace("redis://", "rediss://")
    print("Startup: Connecting to redis...")

    # The redis connection is created here
    redis_connection = redis.from_url(
        url=redis_url,
        encoding="utf-8",
        decode_responses=True
    )
    await FastAPILimiter.init(redis_connection)


@app.get("/api/generate", dependencies=[Depends(RateLimiter(times=5, minutes=1))])
def generate_nickname(
        pokemon: Annotated[str, Query(max_length=12, min_length=3)],
        max_length: Annotated[int, Query(ge=10, le=20)] = 10,
        theme: Annotated[Optional[str], Query(max_length=12, min_length=3)] = None,
        amount: Annotated[int, Query(ge=1, le=5)] = 5):
    assistant_prompt = create_assistant_prompt(theme)
    user_prompt = create_user_prompt(pokemon, amount, max_length)
    logger.info(
        f"Assistant prompt: {assistant_prompt}\nUser prompt: {user_prompt}"
    )
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={"type": "json_object"},
        temperature=1.2,
        messages=[
            {"role": "assistant", "content": assistant_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )
    result = response.choices[0].message.content
    nicknames = OpenAiResponse.model_validate_json(result)
    return nicknames
