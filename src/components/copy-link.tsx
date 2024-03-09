"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CopyLinkButton(
    { id, className }: { id: string, className?: string }
) {
    const [copied, setCopied] = React.useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.origin + "/nickname/" + id)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Button
            variant={"outline"}
            onClick={copyToClipboard}
            className={cn("", className)}
        >
            {copied ? "Copied!" : "Copy Link"}
        </Button>
    )

}
