export interface kvData {
    pokemon: number
    length: validMaxLengths
    theme?: string
    nicknames: string[]
}

export interface localStorageData {
    gid: string
    pokemon: number
    theme?: string
}

export type validMaxLengths = 10 | 12
