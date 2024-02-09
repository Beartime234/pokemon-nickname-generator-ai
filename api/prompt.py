import logging
import os
from typing import Optional

logger = logging.getLogger(__name__)

BASE_PROMPT = """
You are an assistant designed to output JSON. You are given a Pokemon's name and the number of nicknames to create.
You must give them in a form of the list with the key nicknames and the value being a list of strings.

Each nickname must be unique. Shorter and more succinct names the better.
Combine both the characteristics of the Pokemon and the theme to create a nickname.
"""


def create_assistant_prompt(theme: Optional[str]) -> str:
    prompt = BASE_PROMPT
    if theme:
        # Read the theme prompt from the prompts directory
        # the prompt will be a text file with the name of the theme

        # Get this directory
        this_dir = os.path.dirname(__file__)
        try:
            theme_prompt_path = f"{this_dir}/prompts/{theme}.txt"
            logger.info(f"Prompt path: {theme_prompt_path}")
            with open(theme_prompt_path, "r") as file:
                theme_prompt = file.read()
        except FileNotFoundError:
            logger.error(f"Theme {theme} not found in prompts dir.")
            return prompt

        prompt += f"\n{theme_prompt}"

    print(prompt)
    return prompt


def create_user_prompt(pokemon: str, amount: int, length: int) -> str:
    return f"Suggest {amount} names for {pokemon} which are between 2 and {length} characters long."
