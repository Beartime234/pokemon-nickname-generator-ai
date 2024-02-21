"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { capitalize } from "@/lib/utils"
import { ThemeMap } from "@/lib/theme"

type ThemeBadgeProps = {
    theme: string
}

export function ThemeBadge(props: ThemeBadgeProps) {
    const { theme } = props
    const themeColor = theme
        ? ThemeMap.get(theme)?.color || "primary"
        : "primary"

    // @ts-ignore
    return (
        <Badge
            /*
          // @ts-ignore */
            className="bg-[var(--badge)] text-white hover:bg-[var(--badge)]"
            style={{ "--badge": themeColor }}
        >
            {capitalize(theme)}
        </Badge>
    )
}
