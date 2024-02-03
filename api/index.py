from typing import Annotated, Optional

from fastapi import FastAPI, Query
from openai import OpenAI
from pydantic import BaseModel
from pydantic_settings import BaseSettings

from .prompt import create_user_prompt, create_system_prompt


class Settings(BaseSettings):
    OPENAI_API_KEY: str = "OPENAI_API_KEY"

    class Config:
        env_file = ".env.development.local"
        extra = "ignore"


class OpenAiResponse(BaseModel):
    nicknames: list[str]


settings = Settings()
client = OpenAI(api_key=settings.OPENAI_API_KEY)

app = FastAPI(
    title="Pokemon Nickname Generator",
    description="A simple API that generates Pokemon nicknames using AI.",
    version="0.1.0",
)


@app.get("/api/generate")
def generate_nickname(
        pokemon: Annotated[str, Query(max_length=12, min_length=3)],
        theme: Annotated[Optional[str], Query(max_length=12, min_length=3)] = None,
        amount: Annotated[int, Query(ge=1, le=5)] = 5):
    system_prompt = create_system_prompt(theme)
    user_prompt = create_user_prompt(pokemon, amount)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )
    result = response.choices[0].message.content
    nicknames = OpenAiResponse.model_validate_json(result)
    return nicknames


