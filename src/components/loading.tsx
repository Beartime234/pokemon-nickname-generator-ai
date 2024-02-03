"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function Loading() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(35), 500)
        return () => clearTimeout(timer)
    }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(55), 1000)
        return () => clearTimeout(timer)
    }, [])


    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(85), 1500)
        return () => clearTimeout(timer)
    }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 2200)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
}
