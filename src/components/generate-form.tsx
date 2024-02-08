"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { PokemonMap } from "@/lib/pokemon"
import { ThemeMap } from "@/lib/theme"
import { useRouter } from "next/navigation"
import { generate_nicknames } from "@/lib/actions/client"
import React, { useEffect } from "react"
import { QuestionMarkCircledIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Loading } from "@/components/loading"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { validMaxLengths } from "@/lib/actions/types"
import { capitalize } from "@/lib/utils"

const PokemonOptions = Array.from(PokemonMap.entries()).map(([id, pokemon]) => (
    <SelectItem key={pokemon.name} value={id.toString()}>
        {pokemon.name}
    </SelectItem>
))

const ThemeOptions = Array.from(ThemeMap.entries()).map(([name, data]) => (
    <SelectItem key={name} value={name}>
        {capitalize(name)}
    </SelectItem>
))

const FormSchema = z.object({
    pokemon: z.string({
        required_error: "You must select a Pokemon",
    }),
    generationSixPlus: z.boolean().default(false),
    theme: z.string().optional()
})

export function GenerateForm(
) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    useEffect(() => {
        // Set the previous selected theme if it exists
        setTimeout(() => {
            const previousSelectedTheme = localStorage.getItem("previousSelectedTheme")
            if (previousSelectedTheme) {
                form.setValue("theme", previousSelectedTheme)
            }
        }, 500)
    }, [])

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
            const id = await generate_nicknames(pokemon_no, maxLength, data.theme)
            router.push(`/nickname/${id}`)
        } catch (error) {
            toast({
                title: "Uh oh!",
                description:
                    "Could not generate nicknames. Please try again later.",
                variant: "destructive",
            })
            setIsSubmitting(false)
            throw error
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6  lg:w-1/4"
            >
                <FormField
                    control={form.control}
                    name="pokemon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pokemon</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Pokemon" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {PokemonOptions}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
                                        <SelectValue placeholder="Select A Theme" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent position={"popper"} sideOffset={5}>
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
                        <FormItem
                            className="space-x-1">
                            <div className={"flex flex-row items-center space-x-1.5"}>
                                <FormLabel>
                                    Generation {field.value ? "6+" : "1-5"}
                                </FormLabel>
                                <TooltipProvider>
                                    <Tooltip delayDuration={100} >
                                        <TooltipTrigger asChild>
                                            <QuestionMarkCircledIcon />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Generation 1-5 has a max of 10 Characters where as 6+ allow 12.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <Switch
                                checked={field.value}
                                defaultChecked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center">
                    {isSubmitting ? (
                        <>
                            <Button disabled>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Generating
                            </Button>
                        </>
                    ) : (
                        <Button type="submit" className="[self-center]">
                            Generate Nicknames
                        </Button>
                    )}
                </div>
                <div className="flex justify-center">
                    {isSubmitting && <Loading />}
                </div>
            </form>

        </Form>
    )
}

