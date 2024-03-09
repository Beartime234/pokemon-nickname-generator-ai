"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { formatTheme } from "@/lib/utils"
import { ThemeMap } from "@/lib/theme"

type ThemeBadgeProps = {
    theme: string
}

export function ThemeBadge(props: ThemeBadgeProps) {
    const { theme } = props
    const themeColor = theme
        ? ThemeMap.get(theme)?.color || "primary"
        : "primary"

    return (
        <Badge
            className="bg-[var(--badge)] text-white hover:bg-[var(--badge)]"
            /*
            // @ts-ignore */
            style={{ "--badge": themeColor }}
        >
            {formatTheme(theme)}
        </Badge>
    )
}
