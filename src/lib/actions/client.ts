"use client"

import { nanoid } from "../utils"
import { kvData, localStorageData } from "@/lib/actions/types"
import { save_nicknames } from "@/lib/actions/server"
import { PokemonMap } from "@/lib/pokemon"

interface generateNicknamesResponse {
    nicknames: string[]
}

const recentNicknamesKey = "recentNicknames"
const recentNicknamesMax = 10

export async function generate_nicknames(pokemon_dex: number, theme?: string) {
    const pokemonName = PokemonMap.get(pokemon_dex)?.name

    if (pokemonName === undefined) {
        throw new Error("Invalid pokemon dex number")
    }

    // Generate URL
    let url = `/api/generate?pokemon=${encodeURIComponent(pokemonName)}`
    if (theme) {
        url += `&theme=${encodeURIComponent(theme)}`
    }

    // Fetch from API
    const gid = nanoid()
    const response = await fetch(url)
    const data: generateNicknamesResponse = await response.json()

    // Add to KV
    const kvData: kvData = {
        pokemon: pokemon_dex,
        theme,
        nicknames: data.nicknames,
    }
    await save_nicknames(gid, kvData)

    // Add to local storage
    const localStorageData: localStorageData = {
        pokemon: pokemon_dex,
        theme,
        gid,
    }
    const recentNicknames = JSON.parse(
        localStorage.getItem(recentNicknamesKey) || "[]"
    )
    recentNicknames.unshift(localStorageData)
    // If there are more than the max number of recent nicknames, remove the last one
    if (recentNicknames.length > recentNicknamesMax) {
        recentNicknames.pop()
    }
    localStorage.setItem(recentNicknamesKey, JSON.stringify(recentNicknames))
    return gid
}
