"use client"

import React from "react"

// No prop is used in the component; however, kept BodyProps for future scalability.
type HeaderProps = {}

export const Header = (props: HeaderProps) => {
    return (
        <>
            <a href={"/"}>
            <h1
                className="animate-fade-up bg-gradient-to-br from-foreground to-secondary bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
                style={{
                    animationDelay: "0.15s",
                    animationFillMode: "forwards",
                }}
            >
                Pokémon Nickname AI
            </h1>
            </a>
            <p
                className="mt-6 animate-fade-up text-center text-secondary-foreground [text-wrap:balance] md:text-xl pb-4"
                style={{
                    animationDelay: "0.25s",
                    animationFillMode: "forwards",
                }}
            >
                Generate unique Pokémon nicknames.
            </p>
        </>
    )
}
