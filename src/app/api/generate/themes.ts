// Per-theme briefs for nickname generation. Shared rules (length, no full
// names, specificity, variety) live in BASE_PROMPT in route.ts — entries here
// give the model the theme's identity, a concrete bank of vocabulary/imagery to
// mine ("Draw from"), and a technique for tying it to the Pokemon ("Fuse it").
// Only the selected theme is sent per request, so detail here is cheap.
// Keep example names 10 characters or fewer — the model imitates examples over
// instructions, and names must fit the game's field.

export const themes = {
    astrology: `Theme: Astrology. The zodiac, planets, and cosmic omens read as personality.
Draw from: the 12 signs (Leo, Scorpio, Aries), ruling planets (Mars, Venus, Luna), houses, retrogrades, star charts, celestial events (eclipse, solstice), and horoscope language (ascendant, omen, fate).
Fuse it: match a sign or planet to the Pokemon's temperament or element — a fierce fire type leans Leo/solar, a psychic type leans lunar/cosmic.
Be especially inventive and unexpected — favor surprising, off-beat choices over safe ones.
Example for Charizard: Solaris, LeoBlaze, Astra`,
    botanical: `Theme: Botanical. Plants and flowers, chosen for how they mirror the Pokemon.
Draw from: species with matching behavior or look — venus flytrap (bites), cactus/nettle (stings), bramble/ivy (clings), orchid/lotus (elegant), sequoia/oak (massive), moss/fern (soft) — plus parts (thorn, petal, spore, root, bloom).
Fuse it: pick the plant whose trait matches the Pokemon's, then coin from it (a stinging bug → Nettle; an elegant water type → Lotus).
Example for Jolteon: Thistle, Zapbloom, Nettle`,
    cartoons: `Theme: Cartoons. The playful, exaggerated spirit of animation.
Draw from: archetypes and gags (the sidekick, the sneaky villain, the goofball), classic sound effects (boing, zap, pow), and the rubber-hose bounce of old shorts — evoke the vibe, don't lift trademarked character names wholesale.
Fuse it: turn the Pokemon into a cartoon character — its defining trait becomes its shtick (a hyper electric type → Zappy; a lumbering one → Bonk).
Example for Electabuzz: Sparky, ToonBolt, Zappy`,
    cats: `Theme: Cats. Feline grace, from house cats to big cats.
Draw from: breeds (Bengal, Sphynx, Siamese), big cats (panther, lynx, ocelot), and behaviors (prowl, pounce, purr, whisker, claw, nap).
Fuse it: read the Pokemon as a cat — a sleek predator leans panther/prowl, a lazy one leans nap/purr — then blend that with its own traits.
Example for Luxray: Whisker, Prowl, Panthera`,
    cities: `Theme: Cities. World cities and the character they carry.
Draw from: cities whose vibe matches the Pokemon — Venice/Rio (water), Vegas (flashy), Tokyo (tech/electric), Cairo (desert), Reykjavik (ice). A well-chosen real city name stands on its own.
Fuse it: match the city's climate or personality to the Pokemon's type, or blend the city with a trait (a water type → Splashkyo, from Tokyo).
Example for Squirtle: Venice, Rio, Splashkyo`,
    coffee: `Theme: Coffee. The menu and ritual of a coffee shop.
Draw from: drinks (espresso, mocha, latte, ristretto, cortado, affogato), roast and strength (dark roast, bold, decaf), and terms (crema, foam, bean, brew, buzz).
Fuse it: match a drink's strength or temperature to the Pokemon — a jolt of an electric type → Zapresso; a mellow one → Decaf — then coin a portmanteau.
Example for Jolteon: Zapresso, VoltMocha, Ristretto`,
    color: `Theme: Color. Vivid, specific hues that match the Pokemon's palette or mood.
Draw from: rich color words beyond the basics — crimson, vermilion, cobalt, viridian, amber, obsidian, ivory, magenta — plus gem and pigment names (jade, ruby, indigo).
Fuse it: name the exact shade of the Pokemon's body or aura, and pick evocative color words over plain ones (Crimson over Red).
Example for Charmander: Crimson, Scarlet, Amber`,
    cool: `Theme: Cool. Effortless, confident, a little dangerous — understated beats flashy.
Draw from: sleek imagery (shadow, chrome, midnight, blade, frost, ace) and one-word swagger. The coolest names are simple; avoid trying too hard.
Fuse it: distill the Pokemon to its most badass trait and give it a sharp, minimal name.
Example for Greninja: Shade, Nova, Zenith`,
    cute: `Theme: Cute. Kawaii, soft, and adorable.
Draw from: diminutive endings (-y, -bun, -boo, -kins), soft sounds (bubbly, fluff, pip, momo), and pastel, sweet imagery (marshmallow, ribbon, blush).
Fuse it: shrink the Pokemon's trait into something tiny and endearing (a spark → Sparky; a puff → Fluffball).
Example for Jolteon: Zappy, Sparkle, Bolty`,
    dinosaurs: `Theme: Dinosaurs. Prehistoric power and the age of reptiles.
Draw from: species (rex, raptor, trike, ptero, spino), paleo terms (fossil, tar pit, amber, Jurassic), and primal traits (jaws, talon, roar, tusk).
Fuse it: cast the Pokemon as its dinosaur counterpart — an armored one leans Trike/Anky, a predator leans Raptor/Rex.
Example for Tyrunt: RexRock, Raptor, Fossil`,
    fantasy: `Theme: Fantasy. Sword-and-sorcery — myth, magic, and epic quests.
Draw from: creatures (wyrm, griffin, wraith, golem), magic (rune, hex, spell, arcane, ember), and high-fantasy titles (warden, seer, drake, oracle).
Fuse it: reimagine the Pokemon as a fantasy being and name it for its power or its role in a quest.
Example for Dragonite: Wyrm, Spellwing, Drakelore`,
    food: `Theme: Food. Dishes, ingredients, and flavors that match the look or type.
Draw from: ingredients (basil, chili, cocoa, wasabi), dishes (dumpling, taco, sushi), and texture or flavor (crispy, gooey, spicy, sweet).
Fuse it: pick the food the Pokemon resembles or evokes — a grass type → Basil/Sprout; a fire type → Chili/Sizzle.
Example for Bulbasaur: Basil, Sprout, Dumpling`,
    insects: `Theme: Insects. The intricate, vivid world of bugs.
Draw from: species (hornet, mantis, beetle, moth, cicada), traits (stinger, chitin, swarm, molt, iridescence), and life stages (larva, pupa, metamorphosis).
Fuse it: match the insect's weapon or behavior to the Pokemon (a stinger → Stinger/Hornet; a shell → Chitin).
Example for Beedrill: Hornet, Stinger, Mantis`,
    landmarks: `Theme: Landmarks. Monuments and natural wonders known worldwide.
Draw from: structures (Gibraltar, BigBen, Colosseum, Pyramid) and natural wonders (Everest, Niagara, Vesuvius, Sahara). A fitting landmark name works on its own.
Fuse it: match the landmark's scale or element to the Pokemon — a rock type → Gibraltar/Everest; a fire type → Vesuvius.
Example for Geodude: Gibraltar, Everest, BigBen`,
    majestic: `Theme: Majestic. Grandeur, awe, and legendary presence.
Draw from: regal and celestial imagery (sovereign, throne, halo, aurora, empyrean, titan) and words that feel larger than life.
Fuse it: elevate the Pokemon to something awe-inspiring, leaning on its grandest trait — wings, size, glow.
Example for Dragonite: Sovereign, Celestia, Highborn`,
    movies: `Theme: Movies. Cinema — genres, iconic characters, and famous titles.
Draw from: genres and tropes (noir, epic, heist), character archetypes (the hero, the villain, the maverick), and evocative one-word titles. A fitting film reference stands on its own.
Fuse it: cast the Pokemon in a movie role that matches its vibe — a psychic type → Inception/Trinity; a tough one → Maverick.
Example for Espeon: Inception, Trinity, Mystique`,
    music: `Theme: Music. Genres, instruments, and the language of sound.
Draw from: terms (crescendo, tempo, bassline, riff, remix), instruments (cello, synth, drum), and genres (jazz, techno, opera).
Fuse it: match the Pokemon's energy or sound to a musical idea — a loud one → Crescendo/Bass; a fast one → Tempo/Riff.
Example for Noivern: Crescendo, Tempo, Bassline`,
    mythology: `Theme: Mythology. Gods and legends from world myth.
Draw from: pantheons (Zeus, Thor, Ra, Anubis, Loki, Freya) and their domains (thunder, sun, death, sea, trickery). Match the deity's domain to the Pokemon's powers.
Fuse it: pick the god whose domain matches the Pokemon's element, then blend name and trait (an electric type → Zeuspark/Raiden).
Example for Jolteon: Zeuspark, Raiden, Thorvolt`,
    pirates: `Theme: Pirates. Seafaring outlaws and the age of sail.
Draw from: nautical slang (matey, scallywag, brig, keel), treasure and lore (doubloon, kraken, Jolly Roger), and pirate archetypes (captain, corsair, buccaneer).
Fuse it: make the Pokemon a pirate — a fearsome sea type → Kraken/Blackfin; a scrappy one → Scallywag.
Example for Tentacool: Kraken, Corsair, Jolly`,
    quirky: `Theme: Quirky. Oddball, unexpected, and a little absurd.
Draw from: puns, wordplay, unexpected mash-ups, silly suffixes, and names that make people do a double take. The weirder the better — but it must still tie to the Pokemon.
Fuse it: take one trait and twist it into a pun or oddball coinage (a spoon-bending psychic → SpoonBend; a wobbly one → Wobblet).
Be especially inventive and unexpected — favor surprising, off-beat choices over safe ones.
Example for Alakazam: SpoonBend, PsycheOut, Wobble`,
    royalty: `Theme: Royalty. Crowns, courts, and noble bearing.
Draw from: titles (monarch, duchess, regent, baron), regalia (crown, scepter, throne, crest), and courtly words (noble, sovereign, dynasty).
Fuse it: give the Pokemon a royal rank that fits its presence — an imposing one → Monarch/Regent; an elegant one → Duchess.
Example for Dragonair: Regalia, Monarch, Duchess`,
    space: `Theme: Space. The cosmos and space exploration.
Draw from: celestial bodies (nebula, quasar, pulsar, comet), missions and craft (Apollo, orbit, rover, lander), and cosmic scale (void, galaxy, singularity).
Fuse it: match the Pokemon's aura or element to a cosmic phenomenon — a psychic type → Nebula/Quasar; a fast one → Comet.
Example for Starmie: Nebula, Apollo, Galaxia`,
    sports: `Theme: Sports. Athletics, competition, and physical prowess.
Draw from: moves and positions (slugger, sweeper, striker, sprint), sports (boxing, judo, sprint), and athlete archetypes (champ, ace, rookie).
Fuse it: match the Pokemon's build or move to a sport — a heavy hitter → Slugger/Suplex; a fast one → Sprint/Ace.
Example for Machamp: Slugger, Suplex, Champ`,
    starbucks_misspelling: `Theme: Starbucks Misspelling. Butcher the Pokemon's own name the way a rushed barista scrawls it on a cup — phonetically recognizable, absurdly misspelt.
How: swap letters for same-sound ones (ch→tch, oo→ew, k→q), drop or double letters, and split or mash syllables. Every name must actually be misspelt — never include the correct spelling.
This theme is the one exception to the no-name rule: the joke IS the mangled name.
Be especially inventive and unexpected — favor surprising, off-beat choices over safe ones.
Example for Pikachu: Peekachoo, Pikachew, Peacachu`,
    strong: `Theme: Strong. Raw power and toughness — names that sound like they bench-press boulders.
Draw from: force words (crusher, titan, brute, ironjaw, maul, tank) and hard, heavy imagery (steel, granite, hammer).
Fuse it: amplify the Pokemon's most powerful trait into an intimidating name.
Example for Machamp: Crusher, Titan, Ironjaw`,
    stylish: `Theme: Stylish. High fashion — chic, sleek, haute couture.
Draw from: fashion language (couture, vogue, chic, atelier, runway), materials (silk, velvet, chrome), and designer-adjacent flair.
Fuse it: dress the Pokemon up — match its color or elegance to a fashion word (a sleek water type → AquaChic/Couture).
Example for Vaporeon: AquaChic, Couture, Vogue`,
    video_games: `Theme: Video Games. Gaming culture — mechanics, terms, and lore.
Draw from: mechanics and terms (pixel, glitch, respawn, combo, boss, loot), retro flavor (8-bit, arcade, cartridge), and gamer slang (clutch, GG).
Fuse it: match a game concept to the Pokemon — a digital one → Pixel/Glitch; a powerhouse → Boss/Combo.
Example for Porygon: Pixel, Glitch, EightBit`,
    wild_west: `Theme: Wild West. The American frontier.
Draw from: figures (outlaw, sheriff, gunslinger, bandit), places and props (saloon, canyon, six-shooter, tumbleweed), and dusty frontier flavor.
Fuse it: cast the Pokemon as a frontier character — a ground type → DustDevil/Tumble; a tough one → Outlaw/Colt.
Example for Diglett: Tumbleweed, Outlaw, DustyPete`,
    dogs: `Theme: Dogs. Canine loyalty and energy, from lapdogs to wolves.
Draw from: breeds (husky, corgi, mastiff, beagle), wild canids (wolf, dingo, jackal), and behaviors (fetch, howl, guard, wag, sniff, pounce).
Fuse it: read the Pokemon as a dog — a loyal guardian leans mastiff/guard, a hyper one leans pup/fetch — then blend with its traits.
Example for Arcanine: Fang, Howler, Ruffkin`,
    birds: `Theme: Birds. Avian grace, from songbirds to raptors.
Draw from: species (falcon, raven, sparrow, heron, owl), traits (talon, plume, beak, wingspan, glide), and calls (screech, chirp, caw).
Fuse it: match the bird to the Pokemon's flight or temperament — a fierce flyer leans falcon/talon, a small one leans sparrow/chirp.
Example for Talonflame: Talon, Ember, Skreech`,
    ocean: `Theme: Ocean. The deep sea and its creatures.
Draw from: marine life (orca, manta, urchin, anglerfish, jelly), depths and features (abyss, reef, tide, trench, current), and briny words (brine, kelp, coral).
Fuse it: match a sea creature or depth to the Pokemon — a lurking one leans anglerfish/abyss, a swift one leans manta/current.
Example for Gyarados: Abyssal, Maelstrom, Riptide`,
    weather: `Theme: Weather. Storms, skies, and the elements overhead.
Draw from: phenomena (tempest, monsoon, blizzard, gale, drizzle), sky words (cirrus, thunderhead, aurora), and intensity (squall, downpour, frost).
Fuse it: match the Pokemon's element or mood to a weather event — an electric type leans tempest/thunder, an ice type leans blizzard/frost.
Example for Zapdos: Tempest, Thunder, Squall`,
    gemstones: `Theme: Gemstones. Precious stones, crystals, and minerals.
Draw from: gems (onyx, garnet, opal, topaz, jasper), qualities (facet, prism, carat, geode), and mineral traits (luster, vein, shard).
Fuse it: match the gem's color or hardness to the Pokemon — a dark one leans onyx/obsidian, a radiant one leans opal/prism.
Example for Sableye: Onyx, Prism, Garnet`,
    robots: `Theme: Robots. Machines, circuitry, and cyber-tech.
Draw from: hardware (servo, piston, chassis, rivet), digital terms (byte, circuit, cyber, proto), and mechanical sounds (whirr, clank, buzz).
Fuse it: rebuild the Pokemon as a machine — a heavy one leans mech/piston, a quick one leans servo/circuit.
Example for Metagross: Titanium, Servo, Cybron`,
    spooky: `Theme: Spooky. Halloween — the eerie, the haunted, the macabre.
Draw from: creatures (ghoul, wraith, vampire, banshee), imagery (pumpkin, cobweb, tombstone, crypt), and dread (shiver, haunt, curse, dusk).
Fuse it: match the Pokemon's menace to something haunted — a ghost leans wraith/haunt, a dark one leans crypt/dusk.
Example for Mimikyu: Boohex, Wraithy, Spook`,
    superheroes: `Theme: Superheroes. Comic-book heroics and secret identities.
Draw from: hero tropes (caped, masked, vigilante), powers (super, mega, ultra, sonic, blast), and titles (captain, guardian, sentinel) — evoke the genre, don't lift trademarked hero names.
Fuse it: turn the Pokemon into a hero named for its signature power — a strong one leans Titan/Smash, a fast one leans Sonic/Dash.
Example for Machamp: Captain, MegaFist, Titan`,
} satisfies Record<string, string>

// The literal key union — src/lib/theme.tsx types its color map with this so
// a theme added on only one side fails `next build` instead of production
export type ThemeKey = keyof typeof themes
