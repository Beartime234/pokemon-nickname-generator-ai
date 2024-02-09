import { get_nicknames } from "@/lib/actions/server"
import { NicknameCard } from "@/components/nickname-card"
import { Button } from "@/components/ui/button"
import React from "react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Nickname",
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
