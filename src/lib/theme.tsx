import type { ThemeKey } from "@/app/api/generate/themes"

interface ThemeData {
    color: string
}

// Themes are the different types of themes that go along with nicknaming a
// Pokémon, e.g. "Cute", "Cool", or "Cities". The prompting for each lives in
// src/app/api/generate/themes.ts; Record<ThemeKey, ...> ties this map to that
// file at compile time, so a theme added on only one side fails `next build`.
// Badge colors need >= 4.5:1 contrast with white text.
const themeColors: Record<ThemeKey, ThemeData> = {
    cute: { color: "#d6336c" },
    cool: { color: "blue" },
    strong: { color: "#c92a2a" },
    mythology: { color: "purple" },
    botanical: { color: "#1f7a2e" },
    coffee: { color: "brown" },
    starbucks_misspelling: { color: "darkgreen" },
    color: { color: "#c2255c" },
    stylish: { color: "darkred" },
    majestic: { color: "#8a6d00" },
    quirky: { color: "#c2410c" },
    astrology: { color: "darkblue" },
    cities: { color: "#1971c2" },
    wild_west: { color: "saddlebrown" },
    fantasy: { color: "darkviolet" },
    food: { color: "#9a3412" },
    landmarks: { color: "darkslategray" },
    movies: { color: "darkred" },
    sports: { color: "darkgreen" },
    cartoons: { color: "#9a3412" },
    royalty: { color: "darkviolet" },
    music: { color: "darkblue" },
    video_games: { color: "darkred" },
    space: { color: "darkblue" },
    pirates: { color: "darkslategray" },
    dinosaurs: { color: "darkgreen" },
    insects: { color: "#9a3412" },
    cats: { color: "darkviolet" },
}

export const ThemeMap = new Map<string, ThemeData>(Object.entries(themeColors))

// The accent color for a selected theme, or undefined for no theme / "none"
export const themeColor = (theme?: string): string | undefined =>
    theme && theme !== "none" ? ThemeMap.get(theme)?.color : undefined
