"use client"

import { CrossCircledIcon, ReloadIcon } from "@radix-ui/react-icons"

import { capitalize, cn, errorToast } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { generate_nicknames } from "@/lib/actions/client"
import { useRouter } from "next/navigation"
import React from "react"
import { PokemonMap } from "@/lib/pokemon"
import { Badge } from "@/components/ui/badge"
import { validMaxLengths } from "@/lib/actions/types"
import { ThemeMap } from "@/lib/theme"
import { ThemeBadge } from "@/components/theme-badge"
import { toast } from "@/components/ui/use-toast"
import { an } from "@upstash/redis/zmscore-b6b93f14"

type NicknameCardProps = {
    pokemon_no: number
    length: validMaxLengths
    nicknames: string[]
    theme?: string
} & React.ComponentProps<typeof Card>

export function NicknameCard({
    className,
    pokemon_no,
    length,
    theme,
    nicknames,
    ...props
}: NicknameCardProps) {
    const router = useRouter()

    const [isTryingAgain, setIsTryingAgain] = React.useState(false)
    const pokemonName = PokemonMap.get(pokemon_no)?.name ?? "MissingNo"

    async function onRetry() {
        setIsTryingAgain(true)
        try {
            const id = await generate_nicknames(pokemon_no, length, theme)
            router.push("/nickname/" + id)
        } catch (error: any) {
            errorToast(error.message)
            setIsTryingAgain(false)
        }
    }

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_no}.png`

    return (
        <Card
            className={cn(
                "h-[450px] w-[350px] md:w-[550px]  md:h-[475px]",
                className
            )}
            {...props}
        >
            <CardHeader className={"sm:pb-1"}>
                <CardTitle>
                    {pokemonName}
                    {theme && (
                        <span className={"float-right"}>
                            <ThemeBadge theme={theme} />
                        </span>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:gap-1">
                <div className="flex items-center h-64 md:p-2">
                    <Image
                        className="mx-auto"
                        alt={pokemonName}
                        src={imageSrc}
                        width={225}
                        height={175}
                    />
                </div>
                <NicknamesList nicknames={nicknames} start={0} end={3} />
                <NicknamesList nicknames={nicknames} start={3} end={5} />
            </CardContent>
            <CardFooter>
                {isTryingAgain ? (
                    <Button disabled className="w-full">
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Trying again...
                    </Button>
                ) : (
                    <Button
                        variant="destructive"
                        className="w-full"
                        onClick={onRetry}
                    >
                        <CrossCircledIcon className="mr-2 h-4 w-4" /> I
                        don&apos;t like any of these
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

const NicknamesList = ({
    nicknames,
    start,
    end,
}: {
    nicknames: string[]
    start: number
    end: number
}) => (
    <div className="flex h-5 items-center space-x-3 text-sm font-semibold justify-center lg:text-2xl md:text-xl">
        {nicknames?.slice(start, end).map((nickname, index, slice) => (
            <React.Fragment key={index}>
                <div>{nickname}</div>
                {/* Only render the separator if it's not the last item */}
                {index < slice.length - 1 && (
                    <Separator orientation="vertical" />
                )}
            </React.Fragment>
        ))}
    </div>
)
