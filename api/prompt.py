import logging
from pathlib import Path
from typing import Optional, TypedDict

# Define the logger
logger = logging.getLogger(__name__)

# Base prompt definition
BASE_PROMPT = """
You are an assistant designed to output JSON. You are given a Pokemon's name and the number of nicknames to create.
You must give them in a form of the list with the key nicknames and the value being a list of strings.

Each nickname must be unique. Shorter and more succinct names the better.
Combine both the characteristics of the Pokemon and the theme to create a nickname.
"""


# TypedDict for structured prompt mapping
class PromptMap(TypedDict):
    file: str  # The file name of the prompt without the .txt extension
    temperature: float  # The temperature to use for the prompt


# Prompt map configuration
PROMPT_MAP: dict[str, PromptMap] = {
    "botanical": {"file": "botanical", "temperature": 1.2},
    "coffee": {"file": "coffee", "temperature": 1.2},
    "cool": {"file": "cool", "temperature": 1.2},
    "cute": {"file": "cute", "temperature": 1.2},
    "mythology": {"file": "mythology", "temperature": 1.2},
    "starbucks_misspelling": {"file": "starbucks_misspelling", "temperature": 1.5},
    "strong": {"file": "strong", "temperature": 1.2},
    "color": {"file": "color", "temperature": 1.2},
    "stylish": {"file": "stylish", "temperature": 1.2},
    "majestic": {"file": "majestic", "temperature": 1.2},
    "quirky": {"file": "quirky", "temperature": 1.5},
    "astrology": {"file": "astrology", "temperature": 1.5},
    "cities": {"file": "cities", "temperature": 1.0},
    "wild_west": {"file": "wild_west", "temperature": 1.2},
    "fantasy": {"file": "fantasy", "temperature": 1.2},
    "food": {"file": "food", "temperature": 1.2},
    "landmarks": {"file": "landmarks", "temperature": 1.2},
    "movies": {"file": "movies", "temperature": 1.2},
    "sports": {"file": "sports", "temperature": 1.2},
    "cartoons": {"file": "cartoons", "temperature": 1.2},
    "royalty": {"file": "royalty", "temperature": 1.2},
    "music": {"file": "music", "temperature": 1.2},
    "video_games": {"file": "video_games", "temperature": 1.2},
    "space": {"file": "space", "temperature": 1.2},
    "pirates": {"file": "pirates", "temperature": 1.2},
    "dinosaurs": {"file": "dinosaurs", "temperature": 1.2},
    "insects": {"file": "insects", "temperature": 1.2},
    "cats": {"file": "cats", "temperature": 1.2},
}


# Function to read a theme prompt from a file
def read_theme_prompt(theme: str) -> Optional[str]:
    try:
        # Resolve the theme prompt file path
        theme_prompt_filename = PROMPT_MAP[theme]["file"]
        theme_prompt_path = Path(__file__).parent / "prompts" / f"{theme_prompt_filename}.txt"

        # Log the resolved path
        logger.info(f"Prompt path: {theme_prompt_path}")

        # Read and return the theme prompt content
        return theme_prompt_path.read_text()
    except KeyError:
        logger.error(f"Theme {theme} not found in prompt map.")
    except FileNotFoundError:
        logger.error(f"Theme prompt file {theme_prompt_filename}.txt not found in prompts directory.")
    return None


def get_theme_temperature(theme: str) -> float:
    try:
        return PROMPT_MAP[theme]["temperature"]
    except KeyError:
        logger.error(f"Theme {theme} not found in prompt map.")
    return 1.2


def create_assistant_prompt(theme: Optional[str]) -> str:
    prompt = BASE_PROMPT.strip()

    if theme:
        theme_prompt = read_theme_prompt(theme)
        if theme_prompt:  # If the theme prompt was read successfully
            prompt += f"\n{theme_prompt}\n"

    return prompt


def create_user_prompt(pokemon: str, amount: int, length: int) -> str:
    return f"Suggest {amount} names for {pokemon} which are between 2 and {length} characters long."
