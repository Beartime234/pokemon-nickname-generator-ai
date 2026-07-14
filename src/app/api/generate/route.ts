import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { z } from "zod"
import { getClientIp } from "@/lib/request"
import { generateNicknamesResponse } from "@/lib/actions/types"
import { themes, type ThemeKey } from "./themes"

const BASE_PROMPT = `You write nicknames for a specific Pokemon. You know its species, type, appearance, signature moves, lore, and personality in detail — every name must be traceable to THIS Pokemon, not one that would fit any creature.

The specificity test: if a name could be swapped onto a random other Pokemon and still make sense, it's too generic — throw it out and coin something sharper. A bare dictionary word ("Cat", "Pea", "Blaze") is almost never specific enough on its own; fuse it with a real detail of this Pokemon.

Rules:
- Length is a hard limit: every name must fit the character limit given in the request. It has to fit in the game's name field.
- Never use the Pokemon's full name or the theme's name verbatim.
- Names should read like names: capitalized, no spaces, and they flow when said aloud. Favor coined words, clever portmanteaus, and puns over two words jammed together or a plain word borrowed as-is.
- Vary the set: each name should take a different angle on this Pokemon (a signature trait, its typing, a move, its evolution, a bit of lore) — never five names with the same pattern.`

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
    // Names should suit the Pokemon's whole evolutionary line, not just this stage
    evolution_line: z
        .enum(["true", "false"])
        .default("false")
        .transform((v) => v === "true"),
})

const EVOLUTION_RULE = `This name has to work for this Pokemon's ENTIRE evolutionary line, not just its current stage. Pick names that still fit after it evolves and that suited its pre-evolutions too — lean on traits shared across the whole line (typing, body plan, lineage) rather than a quirk of this one form.`

const generationFailed = () =>
    NextResponse.json({ error: "Failed to generate nicknames" }, { status: 502 })

export async function GET(request: NextRequest) {
    const parsed = paramsSchema.safeParse(
        Object.fromEntries(request.nextUrl.searchParams)
    )
    if (!parsed.success) {
        return NextResponse.json({ error: "Invalid parameters" }, { status: 422 })
    }
    const { pokemon, max_length, theme, amount, evolution_line } = parsed.data

    const { success } = await ratelimit.limit(getClientIp(request))
    if (!success) {
        return NextResponse.json({ error: "Rate limited" }, { status: 429 })
    }

    let systemPrompt = theme ? `${BASE_PROMPT}\n\n${themes[theme]}` : BASE_PROMPT
    if (evolution_line) {
        systemPrompt += `\n\n${EVOLUTION_RULE}`
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
