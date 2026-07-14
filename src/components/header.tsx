"use client"

import React from "react"

export const Header = () => {
    return (
        <>
            <div>
                <a href={"/"} className="flex justify-center">
                    <h1
                        className="animate-fade-up text-center font-display text-3xl font-bold tracking-[-0.02em] text-foreground [text-wrap:balance] md:text-6xl md:leading-[5rem] mt-2"
                        style={{ animationDelay: "0.15s" }}
                    >
                        <span className="text-primary">Pokémon</span> Nickname
                        AI
                    </h1>
                </a>
            </div>
            <p
                className="mt-6 animate-fade-up text-center text-muted-foreground [text-wrap:balance] md:text-xl pb-4"
                style={{ animationDelay: "0.25s" }}
            >
                Generate unique Pokémon nicknames.
            </p>
        </>
    )
}
