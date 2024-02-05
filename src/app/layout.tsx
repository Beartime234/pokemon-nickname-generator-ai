import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Menu } from "@/components/menu"
import React from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from "next"


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Pokemon AI Name Generator",
    description: "A Pokemon name generator powered by AI.",
    metadataBase: new URL("https://nickname.poketime.dev"),
    robots: {
        follow: true,
        index: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={fontSans.className}>
        <Toaster />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col items-end p-3 md:p-5">
                        <Menu />
                    </div>
                    <Header />
                    <div className="flex flex-col items-center justify-center">
                        {children}
                        <SpeedInsights />
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
