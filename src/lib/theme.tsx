interface ThemeData {
    color: string
}

// Themes are the different types of themes that go along with nicknaming a Pokémon
// for example, "Cute", "Cool", "Tough", etc. Or something like Cities, Movies, Music Artists, etc.
// The logic/prompting for them is in the API

export const ThemeMap = new Map<string, ThemeData>([
    ["Cute", { color: "pink" }],
    ["Cool", { color: "blue" }],
    ["Tough", { color: "red" }],
])

