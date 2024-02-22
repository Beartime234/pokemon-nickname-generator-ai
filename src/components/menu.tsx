"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Previous } from "@/components/previous"
import Image from "next/image"
export function Menu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href={"/"} className={"flex justify-center"}>
                        <Image
                            src={"/images/logo-bgremove.png"}
                            alt={"logo"}
                            height={35}
                            width={35}
                        />
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Previous />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
