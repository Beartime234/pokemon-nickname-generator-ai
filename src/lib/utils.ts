import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from "nanoid"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// 7-character random string
// TODO I want to make this more unique like a pokemon name plus a random string
export const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    7
)
export const isBrowser = (): boolean => {
    return typeof window !== "undefined"
}
export const nextLocalStorage = (): Storage | void => {
    if (isBrowser()) {
        return window.localStorage
    }
}
