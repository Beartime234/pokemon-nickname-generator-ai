"use server"

import { cache } from "react"
import { kv } from "@vercel/kv"
import { kvData } from "./types"

// cache() memoizes per request — generateMetadata and the page share one KV
// read (kv fetches are no-store, so Next's fetch dedupe doesn't apply)
export const get_nicknames = cache(async (id: string) => {
    const kvData = await kv.get<kvData>(id)
    if (!kvData) {
        return null
    }
    return kvData
})

export async function save_nicknames(id: string, kvData: kvData) {
    await kv.set(id, kvData)
}
