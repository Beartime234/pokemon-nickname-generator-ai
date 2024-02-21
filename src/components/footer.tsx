import React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-10 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600 hidden md:block">
            <span className="text-sm sm:text-center">
                Made with ❤️ by{" "}
                <a href="https://josheaton.co.nz" className="hover:underline">
                    Josh Eaton
                </a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                <li>
                    <a
                        href="https://github.com/Beartime234/ai-pokemon-name-rater"
                        className="hover:underline me-4 md:me-6"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://beartime234.substack.com"
                        className="hover:underline me-4 md:me-6"
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <Dialog>
                        <DialogTrigger asChild>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Acknowledgments
                            </a>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[225px]">
                            <DialogHeader>
                                <DialogTitle className="pb-2">
                                    Acknowledgments
                                </DialogTitle>
                                <DialogDescription className={"space-y-1.5"}>
                                    <ul>
                                        <Acknowledgment
                                            name={"Spirals"}
                                            link={
                                                "https://github.com/steven-tey/spirals"
                                            }
                                            description={
                                                "The project that inspired this one - Used as a reference for the UI/UX"
                                            }
                                        />
                                        <Acknowledgment
                                            name={"nextjs-fastapi-starter"}
                                            link={
                                                "https://github.com/digitros/nextjs-fastapi"
                                            }
                                            description={
                                                "The starter template for this project"
                                            }
                                        />
                                        <Acknowledgment
                                            name={"PokeAPI Sprites"}
                                            link={
                                                "https://github.com/PokeAPI/sprites"
                                            }
                                            description={"Pokemon sprites"}
                                        />
                                    </ul>
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4"></div>
                        </DialogContent>
                    </Dialog>
                </li>
            </ul>
        </footer>
    )
}

const Acknowledgment = ({
    name,
    link,
    description,
}: {
    name: string
    link: string
    description: string
}) => (
    <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
            <li>
                <a href={link} className="hover:underline">
                    {name}
                </a>
            </li>
        </HoverCardTrigger>
        <HoverCardContent className="w-75" side={"left"}>
            <div className="space-y-1">
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
        </HoverCardContent>
    </HoverCard>
)
