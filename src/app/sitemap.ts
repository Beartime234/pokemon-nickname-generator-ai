import { kv } from "@vercel/kv"
import { MetadataRoute } from "next"

// Rebuild at most hourly — each build SCANs the whole keyspace
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const ids: string[] = []
    let cursor = "0"
    do {
        const [nextCursor, keys] = await kv.scan(cursor, {
            match: "*",
            count: 1000,
        })
        cursor = nextCursor
        // Nickname keys are "<pokemon>-<id>" (or a bare id for pre-2024
        // records), never colon-delimited; rate-limiter keys are always
        // "<prefix>:<ip>:<window>" — exclude those so visitor IPs can never
        // leak into a public sitemap
        ids.push(...keys.filter((key) => !key.includes(":")))
        // recommended max sitemap size is 50,000 URLs
    } while (cursor !== "0" && ids.length < 50000)

    return [
        {
            url: "https://nickname.pokemontime.dev/",
            lastModified: new Date().toISOString(),
        },
        ...ids.map((id) => ({
            url: `https://nickname.pokemontime.dev/nickname/${id}`,
            lastModified: new Date().toISOString(),
        })),
    ]
}
