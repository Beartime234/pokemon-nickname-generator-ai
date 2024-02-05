from typing import Optional

from .theme import THEMES

SYS_PROMPT = """
You are an assistant designed to output JSON. You are given a Pokemon's name and the number of nicknames to create.
You must give them in a form of the list with the key `nicknames` and the value being a list of strings.
Each nickname be unique and have a length between 3 and 10 characters. 
Try to avoid using the Pokemon's name in the nickname.
Use the characteristics of the Pokemon to create a nickname.
"""


def create_system_prompt(theme: Optional[str]) -> str:
    prompt = SYS_PROMPT
    if theme:
        theme_prompt = THEMES.get(theme.lower(), {}).get("prompt", "")
        prompt += f"\nUse the theme {theme} for creating the nicknames. {theme_prompt}"
        prompt += "Avoid using the theme name in the nicknames."
    return prompt


def create_user_prompt(pokemon: str, amount: int) -> str:
    return f"Suggest {amount} names for {pokemon}"
