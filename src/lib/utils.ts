import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from "nanoid"
import { toast } from "@/components/ui/use-toast"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// 7-character random appended to the name of the pokemon
export const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    6
)

export const isBrowser = (): boolean => {
    return typeof window !== "undefined"
}
export const nextLocalStorage = (): Storage | void => {
    if (isBrowser()) {
        return window.localStorage
    }
}

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// Function that Removes underscores and capitalizes the first letter of each word
export const formatTheme = (theme: string) => {
    return theme.split("_").map(capitalize).join(" ")
}



export function errorToast(message: string) {
    toast({
        title: "Error!",
        description: message,
        variant: "destructive",
    })
}