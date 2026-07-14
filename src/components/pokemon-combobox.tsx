"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PokemonMap, spriteUrl } from "@/lib/pokemon"

const POKEMON = Array.from(PokemonMap.entries()).map(([dex, { name }]) => ({
    dex,
    name,
    lowerName: name.toLowerCase(),
}))

// Cap rendered rows: mounting all 874 (with sprites) on every open is
// noticeable jank on phones, and a query long enough to matter narrows fast
const MAX_RESULTS = 50

type PokemonComboboxProps = {
    value?: string
    onChange: (dex: string) => void
} & Omit<ButtonProps, "value" | "onChange">

// Accepts and forwards FormControl's Slot-injected props (id, aria-invalid,
// aria-describedby, ref-as-prop) so label and error wiring reach the trigger
export function PokemonCombobox({
    value,
    onChange,
    className,
    ...props
}: PokemonComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const selected = value ? PokemonMap.get(parseInt(value)) : undefined

    const q = query.trim().toLowerCase()
    const matches = q
        ? POKEMON.filter(
              ({ dex, lowerName }) =>
                  lowerName.includes(q) || String(dex).startsWith(q)
          )
        : POKEMON
    const shown = matches.slice(0, MAX_RESULTS)
    const hidden = matches.length - shown.length

    return (
        <Popover
            open={open}
            onOpenChange={(next) => {
                setOpen(next)
                if (!next) setQuery("")
            }}
        >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "w-full justify-between px-3 font-normal shadow-none",
                        !selected && "text-muted-foreground",
                        className
                    )}
                    {...props}
                >
                    {selected && value ? (
                        <span className="flex items-center gap-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={spriteUrl(parseInt(value))}
                                alt=""
                                width={24}
                                height={24}
                            />
                            {selected.name}
                        </span>
                    ) : (
                        "Choose your Pokémon"
                    )}
                    <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-[--radix-popover-trigger-width] p-0"
                align="start"
            >
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder="Search by name or dex number…"
                        value={query}
                        onValueChange={setQuery}
                    />
                    <CommandList>
                        <CommandEmpty>No Pokémon found.</CommandEmpty>
                        {shown.map(({ dex, name }) => (
                            <CommandItem
                                key={dex}
                                value={String(dex)}
                                onSelect={() => {
                                    onChange(String(dex))
                                    setOpen(false)
                                    setQuery("")
                                }}
                                className="gap-2"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={spriteUrl(dex)}
                                    alt=""
                                    width={28}
                                    height={28}
                                    loading="lazy"
                                />
                                <span>{name}</span>
                                <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                                    #{String(dex).padStart(3, "0")}
                                    <CheckIcon
                                        className={cn(
                                            "h-4 w-4 text-primary",
                                            value === String(dex)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </span>
                            </CommandItem>
                        ))}
                        {hidden > 0 && (
                            <div className="px-2 py-1.5 text-center text-xs text-muted-foreground">
                                {q
                                    ? `${hidden} more — keep typing to narrow`
                                    : `${hidden} more — type to search`}
                            </div>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
