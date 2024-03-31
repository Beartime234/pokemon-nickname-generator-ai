"use client"

import { nanoid } from "../utils"
import { kvData, localStorageData, validMaxLengths } from "@/lib/actions/types"
import { save_nicknames } from "@/lib/actions/server"
import { PokemonMap } from "@/lib/pokemon"

interface generateNicknamesResponse {
    nicknames: string[]
}

const recentNicknamesKey = "recentNicknames"
const recentNicknamesMax = 10

export async function generate_nicknames(
    pokemon_dex: number,
    maxLength: validMaxLengths,
    theme?: string
) {
    const pokemonName = PokemonMap.get(pokemon_dex)?.name

    if (pokemonName === undefined) {
        throw new Error("Invalid pokemon dex number")
    }

    // Generate URL
    let url = `/api/generate?pokemon=${encodeURIComponent(pokemonName)}`
    if (maxLength === 12) {
        url += `&max_length=` + 12
    }
    if (theme) {
        url += `&theme=${encodeURIComponent(theme)}`
    }

    // Fetch from API
    const gid = nanoid()
    //  Clean up Pokemon name - First go to lowercase then remove all non a-z characters
    const cleanPokemonName = pokemonName.toLowerCase().replace(/[^a-z]/g, "")
    const uniqueId = `${cleanPokemonName}-${gid}`
    const response = await fetch(url)
    if (!response.ok) {
        if (response.status === 429) {
            throw new Error("Limit exceeded, try again later")
        }
        throw new Error("Failed to generate nicknames")
    }
    const data: generateNicknamesResponse = await response.json()

    // Add to KV
    const kvData: kvData = {
        pokemon: pokemon_dex,
        length: maxLength,
        theme,
        nicknames: data.nicknames,
    }
    await save_nicknames(uniqueId, kvData)

    // Add to local storage
    const localStorageData: localStorageData = {
        pokemon: pokemon_dex,
        theme,
        gid: uniqueId,
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
    return uniqueId
}
