"use client"

import * as React from "react"
import { MouseEventHandler } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { localStorageData } from "@/lib/actions/types"
import { PokemonMap } from "@/lib/pokemon"
import Link from "next/link"
import { nextLocalStorage } from "@/lib/utils"
import { ThemeBadge } from "@/components/theme-badge"

export function Previous() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [recentNicknames, setRecentNicknames] = React.useState<
        localStorageData[]
    >([])

    // Close the sheet when a recent-nickname link navigates
    const onLinkClick = () => setIsOpen(false)

    const onOpen = () => {
        // Refresh the recent nicknames on open
        setRecentNicknames(
            JSON.parse(nextLocalStorage()?.getItem("recentNicknames") || "[]")
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
                    {recentNicknames.map((nickname) => (
                        <React.Fragment key={nickname.gid}>
                            <RecentNickname
                                nicknameData={nickname}
                                onClick={onLinkClick}
                            />
                            <br />
                        </React.Fragment>
                    ))}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

const RecentNickname = ({
    nicknameData,
    onClick,
}: {
    nicknameData: localStorageData
    onClick: MouseEventHandler<HTMLAnchorElement>
}) => {
    const pokemonName =
        PokemonMap.get(nicknameData.pokemon)?.name || "MissingNo"

    return (
        <>
            <Button variant="link" asChild>
                <Link
                    href={`/nickname/${nicknameData.gid}`}
                    onClick={onClick}
                >
                    {pokemonName}
                </Link>
            </Button>
            {nicknameData.theme && <ThemeBadge theme={nicknameData.theme} />}
        </>
    )
}
