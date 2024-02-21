import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from "nanoid"

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
    return str.charAt(0).toUpperCase() + str.slice(1);
}