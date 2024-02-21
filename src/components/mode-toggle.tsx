"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { nextLocalStorage } from "@/lib/utils"

export function ModeToggle() {
    const { setTheme } = useTheme()

    const toggleTheme = () => {
        const currentTheme = nextLocalStorage()?.getItem("theme") // The theme is stored in localStorage
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
