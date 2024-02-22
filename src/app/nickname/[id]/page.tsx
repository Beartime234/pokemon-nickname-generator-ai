import { get_nicknames } from "@/lib/actions/server"
import { NicknameCard } from "@/components/nickname-card"
import { Button } from "@/components/ui/button"
import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import { PokemonMap } from "@/lib/pokemon"
import { capitalize } from "@/lib/utils"

export async function generateMetadata({
    params,
}: {
    params: {
        id: string
    }
}): Promise<Metadata | undefined> {
    const data = await get_nicknames(params.id)
    if (!data) {
        return
    }

    const pokemonName = PokemonMap.get(data.pokemon)?.name ?? "MissingNo"
    const theme = data.theme ? capitalize(data.theme) : undefined

    const title =
        `${pokemonName} AI Nicknames` + (data.theme ? ` - Theme ${theme}` : "")
    const description =
        `AI Generated Nicknames for the pokemon ${pokemonName}` +
        (data.theme ? ` with the theme ${theme}` : "")

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: "@Beartime234",
        },
    }
}

export default async function Result({
    params,
}: {
    params: {
        id: string
    }
}) {
    const data = await get_nicknames(params.id)

    // TODO - 404 page
    if (!data) {
        return (
            <div>
                <h1>404</h1>
            </div>
        )
    }

    return (
        <>
            <div className="p-2 pb-3">
                <NicknameCard
                    pokemon_no={data.pokemon}
                    length={data.length}
                    nicknames={data.nicknames}
                    theme={data.theme}
                />
            </div>
            <div className="pb-1 md:pb-3">
                <Button variant={"outline"} asChild>
                    <Link href="/">Create New</Link>
                </Button>
            </div>
        </>
    )
}
