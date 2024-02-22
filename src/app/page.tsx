import React from "react"
import { GenerateForm } from "@/components/generate-form"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pokemon Nickname AI",
}
export default function Home() {
    return (
        <>
            <GenerateForm />
        </>
    )
}

// https://github.com/steven-tey/spirals/blob/main/app/t/%5Bid%5D/page.tsx
// https://spirals.vercel.app/t/oECQwjK
