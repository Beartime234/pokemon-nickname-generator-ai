"use server"

import { kv } from "@vercel/kv"
import { kvData } from "./types"

export async function get_nicknames(id: string) {
    const kvData = await kv.get<kvData>(id)
    if (!kvData) {
        return null
    }
    return kvData
}

export async function save_nicknames(id: string, kvData: kvData) {
    await kv.set(id, kvData)
}
