"""Contains Themes and their prompts

A theme is used to create a more specific nickname. For example if the Pokemon is Pikachu and the
theme is "Cute", the nickname could be "Cutiechu".
"""
from typing import TypedDict


class ThemeDetail(TypedDict):
    """A themes details
    """
    prompt: str


THEMES = {
    "cute": ThemeDetail(
        prompt=" A cute nickname is one that is sweet and adorable."
    ),
    "cool": ThemeDetail(
        prompt=" A cool nickname is one that is hip and trendy."
    ),
    "strong": ThemeDetail(
        prompt=" A strong nickname is one that is powerful and muscular."
    ),
    "funny": ThemeDetail(
        prompt=" A funny nickname is one that is humorous and amusing."
    ),
}
