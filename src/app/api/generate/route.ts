import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { z } from "zod"
import { themes } from "./themes"

const BASE_PROMPT = `You write nicknames for Pokemon. You know every Pokemon's type, appearance, lore, and personality — draw on the specific Pokemon, not generic traits.

Rules:
- Length is a hard limit: every name must fit the character limit given in the request. It has to fit in the game's name field.
- Never use the Pokemon's full name or the theme's name verbatim.
- Names should read like names: capitalized, no spaces, and they flow when said aloud. Prefer wit, puns, and smooth portmanteaus over two words jammed together.
- Vary the set: each name should take a different angle (a pun, a real word, a portmanteau, a reference) — never five names with the same pattern.`

// gpt-5 models reject non-default temperature; themes that used a high
// temperature for extra randomness get a prompt nudge instead
const EXTRA_CREATIVE_PROMPT =
    "Be especially inventive and unexpected with these names — favor surprising, off-beat choices over safe ones."

// Same limit as the old FastAPI backend (5/minute per IP)
const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    prefix: "generate",
})

const paramsSchema = z.object({
    pokemon: z.string().min(3).max(12),
    max_length: z.coerce.number().int().min(10).max(20).default(10),
    theme: z.string().min(3).max(25).optional(),
    amount: z.coerce.number().int().min(1).max(5).default(5),
})

const responseSchema = z.object({
    nicknames: z.array(z.string()),
})

export async function GET(request: NextRequest) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "127.0.0.1"
    const { success } = await ratelimit.limit(ip)
    if (!success) {
        return NextResponse.json({ error: "Rate limited" }, { status: 429 })
    }

    const parsed = paramsSchema.safeParse(
        Object.fromEntries(request.nextUrl.searchParams)
    )
    if (!parsed.success) {
        return NextResponse.json({ error: "Invalid parameters" }, { status: 422 })
    }
    const { pokemon, max_length, theme, amount } = parsed.data

    const themeData = theme ? themes[theme] : undefined
    let systemPrompt = themeData
        ? `${BASE_PROMPT}\n\n${themeData.prompt}`
        : BASE_PROMPT
    if (themeData?.extraCreative) {
        systemPrompt += `\n${EXTRA_CREATIVE_PROMPT}`
    }
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
        return NextResponse.json(
            { error: "Failed to generate nicknames" },
            { status: 502 }
        )
    }

    const completion = await openAiResponse.json()
    const raw = responseSchema.parse(
        JSON.parse(completion.choices[0].message.content)
    )
    // Enforce the game's length limit server-side — the model occasionally
    // overshoots, and an over-long name is useless to the player
    const nicknames = [...new Set(raw.nicknames.map((n) => n.trim()))].filter(
        (n) => n.length >= 2 && n.length <= max_length
    )
    return NextResponse.json({ nicknames })
}
