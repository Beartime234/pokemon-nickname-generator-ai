"use client"

import { CheckIcon, CopyIcon, CrossCircledIcon, ReloadIcon } from "@radix-ui/react-icons"

import { cn, errorToast } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { generate_nicknames } from "@/lib/actions/client"
import { useRouter } from "next/navigation"
import React from "react"
import { artworkUrl, PokemonMap } from "@/lib/pokemon"
import { validMaxLengths } from "@/lib/actions/types"
import { ThemeBadge } from "@/components/theme-badge"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"


type NicknameCardProps = {
    pokemon_no: number
    length: validMaxLengths
    nicknames: string[]
    theme?: string
} & React.ComponentProps<typeof Card>

// localStorage/matchMedia are read once per render; no change events needed
const emptySubscribe = () => () => {}

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
    // useSyncExternalStore keeps server HTML (no fireworks) and the client
    // read of localStorage/matchMedia from disagreeing at hydration
    const showFireworks = React.useSyncExternalStore(
        emptySubscribe,
        () =>
            localStorage.getItem("fireworks") === "true" &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false
    )

    React.useEffect(() => {
        // Consume the one-shot flag once the confetti has finished
        const timer = setTimeout(
            () => localStorage.setItem("fireworks", "false"),
            5000
        )
        return () => clearTimeout(timer)
    }, [])

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

    return (
        <Card
            className={cn(
                "flex min-h-[450px] w-[350px] flex-col md:w-[550px]",
                className
            )}
            {...props}
        >
            {showFireworks && (
                <Fireworks autorun={{ duration: 700, speed: 2 }} />
            )}
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between gap-2">
                    {pokemonName}
                    {theme && <ThemeBadge theme={theme} />}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col items-center gap-5">
                <Image
                    alt={pokemonName}
                    src={artworkUrl(pokemon_no)}
                    width={160}
                    height={160}
                    className="h-32 w-32 object-contain md:h-40 md:w-40"
                />
                <NicknameTags nicknames={nicknames} />
            </CardContent>
            <CardFooter>
                {isTryingAgain ? (
                    <Button disabled className="w-full">
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Trying again...
                    </Button>
                ) : (
                    <Button
                        variant="outline"
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

const NicknameTags = ({ nicknames }: { nicknames: string[] }) => {
    const [copied, setCopied] = React.useState<number | null>(null)
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined
    )

    React.useEffect(() => () => clearTimeout(timer.current), [])

    async function copy(nickname: string, index: number) {
        try {
            await navigator.clipboard.writeText(nickname)
            setCopied(index)
            clearTimeout(timer.current)
            timer.current = setTimeout(() => setCopied(null), 1500)
        } catch {
            errorToast("Couldn't copy to your clipboard")
        }
    }

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
            <ul className="flex flex-wrap items-center justify-center gap-2.5">
                {nicknames.map((nickname, index) => (
                    <li key={nickname}>
                        <button
                            type="button"
                            onClick={() => copy(nickname, index)}
                            aria-label={`Copy nickname ${nickname}`}
                            className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-lg font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card md:text-xl"
                        >
                            {nickname}
                            {copied === index ? (
                                <CheckIcon className="h-4 w-4" />
                            ) : (
                                <CopyIcon className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
            <p className="text-xs text-muted-foreground" aria-hidden>
                Tap a name to copy it
            </p>
        </div>
    )
}
