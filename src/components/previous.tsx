"use client"

import * as React from "react"
import { MouseEventHandler, useEffect } from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { localStorageData } from "@/lib/actions/types"
import { PokemonMap } from "@/lib/pokemon"
import Link from "next/link"
import { nextLocalStorage } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"


export function Previous() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [recentNicknames, setRecentNicknames] = React.useState<localStorageData[]>([])

    const wait = () => new Promise((resolve) => setTimeout(resolve, 100))

    const onLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        wait().then(() => {
            setIsOpen(false)
            e.preventDefault()
        })
    }

    const onOpen = () => {
        // Refresh the recent nicknames on open
        setRecentNicknames(
            JSON.parse(nextLocalStorage()?.getItem("recentNicknames") || "[]"),
        )
        setIsOpen(true)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="outline" onClick={onOpen}>
                Previous Nicknames
            </Button>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Previous Nicknames</SheetTitle>
                </SheetHeader>
                <SheetDescription className={"py-3"}>
                    {recentNicknames.map((nickname, index) => (
                        <>
                            <RecentNickname
                                key={index}
                                nicknameData={nickname}
                                onClick={onLinkClick}
                            />
                            <br />
                        </>
                    ))}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

const RecentNickname = ({ key, nicknameData, onClick}: {
    key: number
    nicknameData: localStorageData
    onClick: MouseEventHandler<HTMLButtonElement>
}) => {
    const pokemonName =
        PokemonMap.get(nicknameData.pokemon)?.name || "MissingNo"

    return (
        <React.Fragment key={key}>
            <Button variant="link" onClick={onClick}>
                <Link href={`/nickname/${nicknameData.gid}`}>
                    {pokemonName}
                </Link>
            </Button>
            {
                nicknameData.theme && (
                    <Badge>
                        {nicknameData.theme}
                    </Badge>
                )
            }
        </React.Fragment>
    )
}
