// Theme flavor for nickname generation. Shared rules (length, no full names,
// variety) live in BASE_PROMPT in route.ts — entries here only add what makes
// the theme distinct. Keep example names 10 characters or fewer: the model
// imitates examples over instructions, and names must fit the game's field.
// extraCreative themes get an extra push toward off-beat output.
export const themes: Record<string, { prompt: string; extraCreative?: boolean }> = {
    astrology: {
        prompt: `Theme: Astrology. Zodiac signs, planets, horoscopes, celestial omens and their symbolism.
Example for Charizard: Solaris, LeoBlaze, Astra`,
        extraCreative: true,
    },
    botanical: {
        prompt: `Theme: Botanical. Plants and flowers — pick species whose look or behavior mirrors the Pokemon (a venus flytrap bites, a cactus stings).
Example for Jolteon: Thistle, Zapbloom, Nettle`,
    },
    cartoons: {
        prompt: `Theme: Cartoons. Animated characters, classic series, and the playful exaggerated spirit of cartoons.
Example for Electabuzz: Sparky, ToonBolt, Zappy`,
    },
    cats: {
        prompt: `Theme: Cats. Feline breeds, behaviors, and big-cat grace — stealth, curiosity, pouncing, purring.
Example for Luxray: Whisker, Prowl, Panthera`,
    },
    cities: {
        prompt: `Theme: Cities. Famous cities and their vibe — a real city name that suits the Pokemon works well on its own.
Example for Squirtle: Venice, Rio, Splashkyo`,
    },
    coffee: {
        prompt: `Theme: Coffee. Drinks and terms from a coffee shop menu, blended with the Pokemon's traits.
Example for Jolteon: Zapresso, VoltMocha, Ristretto`,
    },
    color: {
        prompt: `Theme: Color. Vivid hues and color words that match the Pokemon's palette, type, or mood.
Example for Charmander: Crimson, Scarlet, Vermilion`,
    },
    cool: {
        prompt: `Theme: Cool. Effortlessly cool — sleek, confident, a little dangerous. Understated beats flashy.
Example for Greninja: Shade, Nova, Zenith`,
    },
    cute: {
        prompt: `Theme: Cute. Kawaii and adorable — soft sounds, diminutive endings, pastel energy.
Example for Jolteon: Zappy, Sparkle, Bolty`,
    },
    dinosaurs: {
        prompt: `Theme: Dinosaurs. Species, fossils, and prehistoric power.
Example for Tyrunt: RexRock, Raptor, Fossil`,
    },
    fantasy: {
        prompt: `Theme: Fantasy. Mythical creatures, spells, enchanted places, and epic-quest energy from fantasy literature and folklore.
Example for Dragonite: Wyrm, Spellwing, Drakelore`,
    },
    food: {
        prompt: `Theme: Food. Dishes, ingredients, and flavors that match the Pokemon's look or type.
Example for Bulbasaur: Basil, Sprout, Dumpling`,
    },
    insects: {
        prompt: `Theme: Insects. Species and traits from the insect world — metamorphosis, swarms, stingers, iridescence.
Example for Beedrill: Hornet, Stinger, Mantis`,
    },
    landmarks: {
        prompt: `Theme: Landmarks. Monuments, natural wonders, and iconic structures — a real landmark name that suits the Pokemon works well on its own.
Example for Geodude: Gibraltar, Everest, BigBen`,
    },
    majestic: {
        prompt: `Theme: Majestic. Grandeur and awe — thrones, celestial phenomena, legendary presence.
Example for Dragonite: Sovereign, Celestia, Highborn`,
    },
    movies: {
        prompt: `Theme: Movies. Films, characters, and cinema culture — a title or character that suits the Pokemon works well on its own.
Example for Espeon: Inception, Trinity, Matilda`,
    },
    music: {
        prompt: `Theme: Music. Genres, instruments, and musical terms that match the Pokemon's sound or style.
Example for Noivern: Crescendo, Tempo, Bassline`,
    },
    mythology: {
        prompt: `Theme: Mythology. Gods, goddesses, and legends — match the deity's domain to the Pokemon's powers.
Example for Jolteon: Zeus, Raiden, Thorvolt`,
    },
    pirates: {
        prompt: `Theme: Pirates. Seafaring outlaws — ships, treasure, sea monsters, nautical slang, and famous pirates.
Example for Tentacool: Kraken, Corsair, Jolly`,
    },
    quirky: {
        prompt: `Theme: Quirky. Oddball and unexpected — puns, wordplay, and names that make people do a double take.
Example for Alakazam: SpoonBend, PsycheOut, Wobble`,
        extraCreative: true,
    },
    royalty: {
        prompt: `Theme: Royalty. Crowns, titles, and noble bearing — kings, queens, duchies, and courtly splendor.
Example for Dragonair: Regalia, Monarch, Duchess`,
    },
    space: {
        prompt: `Theme: Space. The cosmos — stars, planets, galaxies, black holes, and famous space missions.
Example for Starmie: Nebula, Apollo, Galaxia`,
    },
    sports: {
        prompt: `Theme: Sports. Athletics — moves, positions, athlete archetypes, and competitive spirit.
Example for Machamp: Slugger, Suplex, Champ`,
    },
    starbucks_misspelling: {
        prompt: `Theme: Starbucks Misspelling. Butcher the Pokemon's own name the way a barista would — phonetically recognizable, absurdly misspelt. This theme is the one exception to the no-name rule: the joke IS the mangled name. Every name must actually be misspelt — never include the correct spelling.
Example for Pikachu: Peekachoo, Pikachew, Peacachu`,
        extraCreative: true,
    },
    strong: {
        prompt: `Theme: Strong. Raw power and toughness — names that sound like they bench-press boulders.
Example for Machamp: Crusher, Titan, Ironjaw`,
    },
    stylish: {
        prompt: `Theme: Stylish. High fashion — chic, sleek, haute couture energy.
Example for Vaporeon: AquaChic, Couture, Vogue`,
    },
    video_games: {
        prompt: `Theme: Video Games. Gaming culture — characters, mechanics, and terms; a game reference that suits the Pokemon works well on its own.
Example for Porygon: Pixel, Glitch, EightBit`,
    },
    wild_west: {
        prompt: `Theme: Wild West. The frontier — cowboys, outlaws, saloons, deserts, and tumbleweeds.
Example for Diglett: Tumbleweed, Outlaw, DustyPete`,
    },
}
