"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { artworkUrl, hasEvolutionLine, PokemonMap } from "@/lib/pokemon"
import { ThemeMap, themeColor } from "@/lib/theme"
import { useRouter } from "next/navigation"
import { generate_nicknames } from "@/lib/actions/client"
import React, { useEffect } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Loading } from "@/components/loading"
import { PokemonCombobox } from "@/components/pokemon-combobox"
import { Switch } from "@/components/ui/switch"
import { validMaxLengths } from "@/lib/actions/types"
import { errorToast, formatTheme } from "@/lib/utils"

const ThemeOptions = Array.from(ThemeMap.entries()).map(([name]) => (
    <SelectItem key={name} value={name}>
        {formatTheme(name)}
    </SelectItem>
))

const FormSchema = z.object({
    pokemon: z.string({
        required_error: "You must select a Pokémon",
    }),
    generationSixPlus: z.boolean().default(false),
    evolutionLine: z.boolean().default(false),
    theme: z.string().optional(),
})

export function GenerateForm() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    const selectedPokemon = form.watch("pokemon")
    const selectedName = selectedPokemon
        ? PokemonMap.get(parseInt(selectedPokemon))?.name
        : undefined
    const previewAccent = themeColor(form.watch("theme"))
    // Only offer the evolution toggle for Pokémon that actually have a line
    const showEvolutionToggle =
        !!selectedPokemon && hasEvolutionLine(parseInt(selectedPokemon))

    React.useEffect(() => {
        // Don't submit a stale "true" for a single-stage Pokémon
        if (!showEvolutionToggle && form.getValues("evolutionLine")) {
            form.setValue("evolutionLine", false)
        }
    }, [showEvolutionToggle, form])

    useEffect(() => {
        // Restore the last-used theme once on mount
        const previousSelectedTheme = localStorage.getItem(
            "previousSelectedTheme"
        )
        if (previousSelectedTheme && !form.getValues("theme")) {
            form.setValue("theme", previousSelectedTheme)
        }
    }, [form])

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsSubmitting(true)
        if (data.theme === "none" || !data.theme) {
            data.theme = undefined
            localStorage.removeItem("previousSelectedTheme")
        } else {
            localStorage.setItem("previousSelectedTheme", data.theme || "")
        }
        try {
            const pokemon_no = parseInt(data.pokemon)
            let maxLength: validMaxLengths = 10
            if (data.generationSixPlus) {
                maxLength = 12
            }
            const id = await generate_nicknames(
                pokemon_no,
                maxLength,
                data.theme,
                data.evolutionLine
            )
            localStorage.setItem("fireworks", "true")
            router.push(
                `/nickname/${id}`
            )
        } catch (error: any) {
            errorToast(error.message)
            setIsSubmitting(false)
            throw error
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6 lg:w-1/3 xl:w-1/4"
            >
                <FormField
                    control={form.control}
                    name="pokemon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pokémon</FormLabel>
                            <FormControl>
                                <PokemonCombobox
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {selectedPokemon && selectedName && (
                    <div
                        key={selectedPokemon}
                        className="animate-loading-message relative flex justify-center"
                    >
                        {previewAccent && (
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background: `radial-gradient(circle at center, color-mix(in srgb, ${previewAccent} 30%, transparent), transparent 68%)`,
                                }}
                            />
                        )}
                        <Image
                            src={artworkUrl(parseInt(selectedPokemon))}
                            alt={selectedName}
                            width={128}
                            height={128}
                            priority
                            className="relative"
                        />
                    </div>
                )}

                <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Theme</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose a theme" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent
                                    position={"popper"}
                                    sideOffset={5}
                                >
                                    <SelectItem value={"none"}>None</SelectItem>
                                    {ThemeOptions}
                                </SelectContent>
                            </Select>
                            <FormDescription>Optional</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="generationSixPlus"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex flex-row items-center gap-2">
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="!mt-0">
                                    Generation {field.value ? "6+" : "1-5"}{" "}
                                    games
                                </FormLabel>
                            </div>
                            <FormDescription>
                                Gen 1-5 games fit 10-character names, whereas
                                Gen 6+ fit 12.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                {showEvolutionToggle && (
                    <FormField
                        control={form.control}
                        name="evolutionLine"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex flex-row items-center gap-2">
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="!mt-0">
                                        Fits the whole evolution line
                                    </FormLabel>
                                </div>
                                <FormDescription>
                                    Pick a name that still suits this Pokémon
                                    after it evolves (e.g. Onix → Steelix).
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                )}
                <div className="flex justify-center">
                    {isSubmitting ? (
                        <Button disabled>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Generating
                        </Button>
                    ) : (
                        <Button type="submit">Generate Nicknames</Button>
                    )}
                </div>
                <div className="flex justify-center pb-16">
                    {isSubmitting && <Loading />}
                </div>
            </form>
        </Form>
    )
}
