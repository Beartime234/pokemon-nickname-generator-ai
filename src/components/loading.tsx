"use client"

import * as React from "react"

// Honest indeterminate loader: we can't measure LLM progress, so never show
// a determinate bar — a wobbling Pokéball plus rotating flavor lines instead
const MESSAGES = [
    "Consulting the Name Rater…",
    "Flipping through the Pokédex…",
    "Asking Professor Oak…",
    "Rejecting Ditto's suggestions…",
    "Narrowing the shortlist…",
]

export function Loading() {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const timer = setInterval(
            () => setIndex((i) => (i + 1) % MESSAGES.length),
            2000
        )
        return () => clearInterval(timer)
    }, [])

    return (
        <div role="status" className="flex flex-col items-center gap-3 pt-1">
            <Pokeball />
            {/* key remounts the line so the entrance animation replays */}
            <p
                key={index}
                aria-hidden
                className="animate-loading-message text-sm text-muted-foreground"
            >
                {MESSAGES[index]}
            </p>
            <span className="sr-only">Generating nicknames</span>
        </div>
    )
}

const Pokeball = () => (
    <div
        aria-hidden
        className="animate-pokeball-wobble relative h-10 w-10 overflow-hidden rounded-full border-2 border-foreground/80"
    >
        <div className="absolute inset-x-0 top-0 h-1/2 bg-primary" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-card" />
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-foreground/80" />
        <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground/80 bg-background" />
    </div>
)
