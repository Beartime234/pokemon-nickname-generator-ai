export interface kvData {
    pokemon: number
    length: validMaxLengths
    theme?: string
    evolutionLine?: boolean
    nicknames: string[]
}

export interface localStorageData {
    gid: string
    pokemon: number
    theme?: string
}

export type validMaxLengths = 10 | 12

// Response contract of /api/generate — shared by the route and its client
export interface generateNicknamesResponse {
    nicknames: string[]
}
