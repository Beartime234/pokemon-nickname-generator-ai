import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { z } from "zod"
import { getClientIp } from "@/lib/request"
import { generateNicknamesResponse } from "@/lib/actions/types"
import { themes, type ThemeKey } from "./themes"

const BASE_PROMPT = `You write nicknames for Pokemon. You know every Pokemon's type, appearance, lore, and personality — draw on the specific Pokemon, not generic traits.

Rules:
- Length is a hard limit: every name must fit the character limit given in the request. It has to fit in the game's name field.
- Never use the Pokemon's full name or the theme's name verbatim.
- Names should read like names: capitalized, no spaces, and they flow when said aloud. Prefer wit, puns, and smooth portmanteaus over two words jammed together.
- Vary the set: each name should take a different angle (a pun, a real word, a portmanteau, a reference) — never five names with the same pattern.`

// Same limit as the old FastAPI backend (5/minute per IP)
const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    prefix: "generate",
})

const paramsSchema = z.object({
    pokemon: z.string().min(3).max(12),
    max_length: z.coerce.number().int().min(10).max(20).default(10),
    theme: z.enum(Object.keys(themes) as [ThemeKey, ...ThemeKey[]]).optional(),
    amount: z.coerce.number().int().min(1).max(5).default(5),
})

const generationFailed = () =>
    NextResponse.json({ error: "Failed to generate nicknames" }, { status: 502 })

export async function GET(request: NextRequest) {
    const parsed = paramsSchema.safeParse(
        Object.fromEntries(request.nextUrl.searchParams)
    )
    if (!parsed.success) {
        return NextResponse.json({ error: "Invalid parameters" }, { status: 422 })
    }
    const { pokemon, max_length, theme, amount } = parsed.data

    const { success } = await ratelimit.limit(getClientIp(request))
    if (!success) {
        return NextResponse.json({ error: "Rate limited" }, { status: 429 })
    }

    const systemPrompt = theme ? `${BASE_PROMPT}\n\n${themes[theme]}` : BASE_PROMPT
    const userPrompt = `Suggest ${amount} nicknames for ${pokemon}. Each must be at most ${max_length} characters — count the characters before including a name.`

    const openAiResponse = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-5.4-mini",
                reasoning_effort: "none",
                response_format: {
                    type: "json_schema",
                    json_schema: {
                        name: "nicknames",
                        strict: true,
                        schema: {
                            type: "object",
                            properties: {
                                nicknames: {
                                    type: "array",
                                    items: { type: "string" },
                                },
                            },
                            required: ["nicknames"],
                            additionalProperties: false,
                        },
                    },
                },
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt },
                ],
            }),
        }
    )
    if (!openAiResponse.ok) {
        console.error("OpenAI error", openAiResponse.status, await openAiResponse.text())
        return generationFailed()
    }

    try {
        const completion = await openAiResponse.json()
        // strict json_schema guarantees the shape; a refusal (null content)
        // or truncated body throws into the catch below
        const raw = JSON.parse(
            completion.choices[0].message.content
        ) as generateNicknamesResponse
        // Enforce the game's length limit server-side — the model
        // occasionally overshoots, and an over-long name is useless
        const nicknames = [...new Set(raw.nicknames.map((n) => n.trim()))].filter(
            (n) => n.length >= 2 && n.length <= max_length
        )
        // Never persist/share an empty result — let the client show its error
        if (nicknames.length > 0) {
            return NextResponse.json({ nicknames })
        }
    } catch (error) {
        console.error("OpenAI response parse error", error)
    }
    return generationFailed()
}
