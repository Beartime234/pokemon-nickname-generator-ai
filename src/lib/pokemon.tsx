interface PokemonData {
    name: string
}

export const PokemonMap = new Map<number, PokemonData>([
    [1, { name: "Bulbasaur" }],
    [2, { name: "Ivysaur" }],
    [3, { name: "Venusaur" }],
    [4, { name: "Charmander" }],
    [5, { name: "Charmeleon" }],
    [6, { name: "Charizard" }],
    [7, { name: "Squirtle" }],
    [8, { name: "Wartortle" }],
    [9, { name: "Blastoise" }],
    [10, { name: "Caterpie" }],
    [11, { name: "Metapod" }],
    [12, { name: "Butterfree" }],
    [13, { name: "Weedle" }],
    [14, { name: "Kakuna" }],
    [15, { name: "Beedrill" }],
    [16, { name: "Pidgey" }],
    [17, { name: "Pidgeotto" }],
    [18, { name: "Pidgeot" }],
    [19, { name: "Rattata" }],
    [20, { name: "Raticate" }],
    [21, { name: "Spearow" }],
    [22, { name: "Fearow" }],
    [23, { name: "Ekans" }],
    [24, { name: "Arbok" }],
    [25, { name: "Pikachu" }],
    [26, { name: "Raichu" }],
    [27, { name: "Sandshrew" }],
    [28, { name: "Sandslash" }],
    [29, { name: "Nidoran♀" }],
    [30, { name: "Nidorina" }],
    [31, { name: "Nidoqueen" }],
    [32, { name: "Nidoran♂" }],
    [33, { name: "Nidorino" }],
    [34, { name: "Nidoking" }],
    [35, { name: "Clefairy" }],
    [36, { name: "Clefable" }],
    [37, { name: "Vulpix" }],
    [38, { name: "Ninetales" }],
    [39, { name: "Jigglypuff" }],
    [40, { name: "Wigglytuff" }],
    [41, { name: "Zubat" }],
    [42, { name: "Golbat" }],
    [43, { name: "Oddish" }],
    [44, { name: "Gloom" }],
    [45, { name: "Vileplume" }],
    [46, { name: "Paras" }],
    [47, { name: "Parasect" }],
    [48, { name: "Venonat" }],
    [49, { name: "Venomoth" }],
    [50, { name: "Diglett" }],
    [51, { name: "Dugtrio" }],
    [52, { name: "Meowth" }],
    [53, { name: "Persian" }],
    [54, { name: "Psyduck" }],
    [55, { name: "Golduck" }],
    [56, { name: "Mankey" }],
    [57, { name: "Primeape" }],
    [58, { name: "Growlithe" }],
    [59, { name: "Arcanine" }],
    [60, { name: "Poliwag" }],
    [61, { name: "Poliwhirl" }],
    [62, { name: "Poliwrath" }],
    [63, { name: "Abra" }],
    [64, { name: "Kadabra" }],
    [65, { name: "Alakazam" }],
    [66, { name: "Machop" }],
    [67, { name: "Machoke" }],
    [68, { name: "Machamp" }],
    [69, { name: "Bellsprout" }],
    [70, { name: "Weepinbell" }],
    [71, { name: "Victreebel" }],
    [72, { name: "Tentacool" }],
    [73, { name: "Tentacruel" }],
    [74, { name: "Geodude" }],
    [75, { name: "Graveler" }],
    [76, { name: "Golem" }],
    [77, { name: "Ponyta" }],
    [78, { name: "Rapidash" }],
    [79, { name: "Slowpoke" }],
    [80, { name: "Slowbro" }],
    [81, { name: "Magnemite" }],
    [82, { name: "Magneton" }],
    [83, { name: "Farfetch'd" }],
    [84, { name: "Doduo" }],
    [85, { name: "Dodrio" }],
    [86, { name: "Seel" }],
    [87, { name: "Dewgong" }],
    [88, { name: "Grimer" }],
    [89, { name: "Muk" }],
    [90, { name: "Shellder" }],
    [91, { name: "Cloyster" }],
    [92, { name: "Gastly" }],
    [93, { name: "Haunter" }],
    [94, { name: "Gengar" }],
    [95, { name: "Onix" }],
    [96, { name: "Drowzee" }],
    [97, { name: "Hypno" }],
    [98, { name: "Krabby" }],
    [99, { name: "Kingler" }],
    [100, { name: "Voltorb" }],
    [101, { name: "Electrode" }],
    [102, { name: "Exeggcute" }],
    [103, { name: "Exeggutor" }],
    [104, { name: "Cubone" }],
    [105, { name: "Marowak" }],
    [106, { name: "Hitmonlee" }],
    [107, { name: "Hitmonchan" }],
    [108, { name: "Lickitung" }],
    [109, { name: "Koffing" }],
    [110, { name: "Weezing" }],
    [111, { name: "Rhyhorn" }],
    [112, { name: "Rhydon" }],
    [113, { name: "Chansey" }],
    [114, { name: "Tangela" }],
    [115, { name: "Kangaskhan" }],
    [116, { name: "Horsea" }],
    [117, { name: "Seadra" }],
    [118, { name: "Goldeen" }],
    [119, { name: "Seaking" }],
    [120, { name: "Staryu" }],
    [121, { name: "Starmie" }],
    [122, { name: "Mr. Mime" }],
    [123, { name: "Scyther" }],
    [124, { name: "Jynx" }],
    [125, { name: "Electabuzz" }],
    [126, { name: "Magmar" }],
    [127, { name: "Pinsir" }],
    [128, { name: "Tauros" }],
    [129, { name: "Magikarp" }],
    [130, { name: "Gyarados" }],
    [131, { name: "Lapras" }],
    [132, { name: "Ditto" }],
    [133, { name: "Eevee" }],
    [134, { name: "Vaporeon" }],
    [135, { name: "Jolteon" }],
    [136, { name: "Flareon" }],
    [137, { name: "Porygon" }],
    [138, { name: "Omanyte" }],
    [139, { name: "Omastar" }],
    [140, { name: "Kabuto" }],
    [141, { name: "Kabutops" }],
    [142, { name: "Aerodactyl" }],
    [143, { name: "Snorlax" }],
    [144, { name: "Articuno" }],
    [145, { name: "Zapdos" }],
    [146, { name: "Moltres" }],
    [147, { name: "Dratini" }],
    [148, { name: "Dragonair" }],
    [149, { name: "Dragonite" }],
    [150, { name: "Mewtwo" }],
    [151, { name: "Mew" }],
    [152, { name: "Chikorita" }],
    [153, { name: "Bayleef" }],
    [154, { name: "Meganium" }],
    [155, { name: "Cyndaquil" }],
    [156, { name: "Quilava" }],
    [157, { name: "Typhlosion" }],
    [158, { name: "Totodile" }],
    [159, { name: "Croconaw" }],
    [160, { name: "Feraligatr" }],
    [161, { name: "Sentret" }],
    [162, { name: "Furret" }],
    [163, { name: "Hoothoot" }],
    [164, { name: "Noctowl" }],
    [165, { name: "Ledyba" }],
    [166, { name: "Ledian" }],
    [167, { name: "Spinarak" }],
    [168, { name: "Ariados" }],
    [169, { name: "Crobat" }],
    [170, { name: "Chinchou" }],
    [171, { name: "Lanturn" }],
    [172, { name: "Pichu" }],
    [173, { name: "Cleffa" }],
    [174, { name: "Igglybuff" }],
    [175, { name: "Togepi" }],
    [176, { name: "Togetic" }],
    [177, { name: "Natu" }],
    [178, { name: "Xatu" }],
    [179, { name: "Mareep" }],
    [180, { name: "Flaaffy" }],
    [181, { name: "Ampharos" }],
    [182, { name: "Bellossom" }],
    [183, { name: "Marill" }],
    [184, { name: "Azumarill" }],
    [185, { name: "Sudowoodo" }],
    [186, { name: "Politoed" }],
    [187, { name: "Hoppip" }],
    [188, { name: "Skiploom" }],
    [189, { name: "Jumpluff" }],
    [190, { name: "Aipom" }],
    [191, { name: "Sunkern" }],
    [192, { name: "Sunflora" }],
    [193, { name: "Yanma" }],
    [194, { name: "Wooper" }],
    [195, { name: "Quagsire" }],
    [196, { name: "Espeon" }],
    [197, { name: "Umbreon" }],
    [198, { name: "Murkrow" }],
    [199, { name: "Slowking" }],
    [200, { name: "Misdreavus" }],
    [201, { name: "Unown" }],
    [202, { name: "Wobbuffet" }],
    [203, { name: "Girafarig" }],
    [204, { name: "Pineco" }],
    [205, { name: "Forretress" }],
    [206, { name: "Dunsparce" }],
    [207, { name: "Gligar" }],
    [208, { name: "Steelix" }],
    [209, { name: "Snubbull" }],
    [210, { name: "Granbull" }],
    [211, { name: "Qwilfish" }],
    [212, { name: "Scizor" }],
    [213, { name: "Shuckle" }],
    [214, { name: "Heracross" }],
    [215, { name: "Sneasel" }],
    [216, { name: "Teddiursa" }],
    [217, { name: "Ursaring" }],
    [218, { name: "Slugma" }],
    [219, { name: "Magcargo" }],
    [220, { name: "Swinub" }],
    [221, { name: "Piloswine" }],
    [222, { name: "Corsola" }],
    [223, { name: "Remoraid" }],
    [224, { name: "Octillery" }],
    [225, { name: "Delibird" }],
    [226, { name: "Mantine" }],
    [227, { name: "Skarmory" }],
    [228, { name: "Houndour" }],
    [229, { name: "Houndoom" }],
    [230, { name: "Kingdra" }],
    [231, { name: "Phanpy" }],
    [232, { name: "Donphan" }],
    [233, { name: "Porygon2" }],
    [234, { name: "Stantler" }],
    [235, { name: "Smeargle" }],
    [236, { name: "Tyrogue" }],
    [237, { name: "Hitmontop" }],
    [238, { name: "Smoochum" }],
    [239, { name: "Elekid" }],
    [240, { name: "Magby" }],
    [241, { name: "Miltank" }],
    [242, { name: "Blissey" }],
    [243, { name: "Raikou" }],
    [244, { name: "Entei" }],
    [245, { name: "Suicune" }],
    [246, { name: "Larvitar" }],
    [247, { name: "Pupitar" }],
    [248, { name: "Tyranitar" }],
    [249, { name: "Lugia" }],
    [250, { name: "Ho-Oh" }],
    [251, { name: "Celebi" }],
    [252, { name: "Treecko" }],
    [253, { name: "Grovyle" }],
    [254, { name: "Sceptile" }],
    [255, { name: "Torchic" }],
    [256, { name: "Combusken" }],
    [257, { name: "Blaziken" }],
    [258, { name: "Mudkip" }],
    [259, { name: "Marshtomp" }],
    [260, { name: "Swampert" }],
    [261, { name: "Poochyena" }],
    [262, { name: "Mightyena" }],
    [263, { name: "Zigzagoon" }],
    [264, { name: "Linoone" }],
    [265, { name: "Wurmple" }],
    [266, { name: "Silcoon" }],
    [267, { name: "Beautifly" }],
    [268, { name : "Cascoon" }],
    [269, { name: "Dustox" }],
    [270, { name: "Lotad" }],
    [271, { name: "Lombre" }],
    [272, { name: "Ludicolo" }],
    [273, { name: "Seedot" }],
    [274, { name: "Nuzleaf" }],
    [275, { name: "Shiftry" }],
    [276, { name: "Taillow" }],
    [277, { name: "Swellow" }],
    [278, { name: "Wingull" }],
    [279, { name: "Pelipper" }],
    [280, { name: "Ralts" }],
    [281, { name: "Kirlia" }],
    [282, { name: "Gardevoir" }],
    [283, { name: "Surskit" }],
    [284, { name: "Masquerain" }],
    [285, { name: "Shroomish" }],
    [286, { name: "Breloom" }],
    [287, { name: "Slakoth" }],
    [288, { name: "Vigoroth" }],
    [289, { name: "Slaking" }],
    [290, { name: "Nincada" }],
    [291, { name: "Ninjask" }],
    [292, { name: "Shedinja" }],
    [293, { name: "Whismur" }],
    [294, { name: "Loudred" }],
    [295, { name: "Exploud" }],
    [296, { name: "Makuhita" }],
    [297, { name: "Hariyama" }],
    [298, { name: "Azurill" }],
    [299, { name: "Nosepass" }],
    [300, { name: "Skitty" }],
    [301, { name: "Delcatty" }],
    [302, { name: "Sableye" }],
    [303, { name: "Mawile" }],
    [304, { name: "Aron" }],
    [305, { name: "Lairon" }],
    [306, { name: "Aggron" }],
    [307, { name: "Meditite" }],
    [308, { name: "Medicham" }],
    [309, { name: "Electrike" }],
    [310, { name: "Manectric" }],
    [311, { name: "Plusle" }],
    [312, { name: "Minun" }],
    [313, { name: "Volbeat" }],
    [314, { name: "Illumise" }],
    [315, { name: "Roselia" }],
    [316, { name: "Gulpin" }],
    [317, { name: "Swalot" }],
    [318, { name: "Carvanha" }],
    [319, { name: "Sharpedo" }],
    [320, { name: "Wailmer" }],
    [321, { name: "Wailord" }],
    [322, { name: "Numel" }],
    [323, { name: "Camerupt" }],
    [324, { name: "Torkoal" }],
    [325, { name: "Spoink" }],
    [326, { name: "Grumpig" }],
    [327, { name: "Spinda" }],
    [328, { name: "Trapinch" }],
    [329, { name: "Vibrava" }],
    [330, { name: "Flygon" }],
    [331, { name: "Cacnea" }],
    [332, { name: "Cacturne" }],
    [333, { name: "Swablu" }],
    [334, { name: "Altaria" }],
    [335, { name: "Zangoose" }],
    [336, { name: "Seviper" }],
    [337, { name: "Lunatone" }],
    [338, { name: "Solrock" }],
    [339, { name: "Barboach" }],
    [340, { name: "Whiscash" }],
    [341, { name: "Corphish" }],
    [342, { name: "Crawdaunt" }],
    [343, { name: "Baltoy" }],
    [344, { name: "Claydol" }],
    [345, { name: "Lileep" }],
    [346, { name: "Cradily" }],
    [347, { name: "Anorith" }],
    [348, { name: "Armaldo" }],
    [349, { name: "Feebas" }],
    [350, { name: "Milotic" }],
    [351, { name: "Castform" }],
    [352, { name: "Kecleon" }],
    [353, { name: "Shuppet" }],
    [354, { name: "Banette" }],
    [355, { name: "Duskull" }],
    [356, { name: "Dusclops" }],
    [357, { name: "Tropius" }],
    [358, { name: "Chimecho" }],
    [359, { name: "Absol" }],
    [360, { name: "Wynaut" }],
    [361, { name: "Snorunt" }],
    [362, { name: "Glalie" }],
    [363, { name: "Spheal" }],
    [364, { name: "Sealeo" }],
    [365, { name: "Walrein" }],
    [366, { name: "Clamperl" }],
    [367, { name: "Huntail" }],
    [368, { name: "Gorebyss" }],
    [369, { name: "Relicanth" }],
    [370, { name: "Luvdisc" }],
    [371, { name: "Bagon" }],
    [372, { name: "Shelgon" }],
    [373, { name: "Salamence" }],
    [374, { name: "Beldum" }],
    [375, { name: "Metang" }],
    [376, { name: "Metagross" }],
    [377, { name: "Regirock" }],
    [378, { name: "Regice" }],
    [379, { name: "Registeel" }],
    [380, { name: "Latias" }],
    [381, { name: "Latios" }],
    [382, { name: "Kyogre" }],
    [383, { name: "Groudon" }],
    [384, { name: "Rayquaza" }],
    [385, { name: "Jirachi" }],
    [386, { name: "Deoxys" }],
    [387, { name: "Turtwig" }],
    [388, { name: "Grotle" }],
    [389, { name: "Torterra" }],
    [390, { name: "Chimchar" }],
    [391, { name: "Monferno" }],
    [392, { name: "Infernape" }],
    [393, { name: "Piplup" }],
    [394, { name: "Prinplup" }],
    [395, { name: "Empoleon" }],
    [396, { name: "Starly" }],
    [397, { name: "Staravia" }],
    [398, { name: "Staraptor" }],
    [399, { name: "Bidoof" }],
    [400, { name: "Bibarel" }],
    [401, { name: "Kricketot" }],
    [402, { name: "Kricketune" }],
    [403, { name: "Shinx" }],
    [404, { name: "Luxio" }],
    [405, { name: "Luxray" }],
    [406, { name: "Budew" }],
    [407, { name: "Roserade" }],
    [408, { name: "Cranidos" }],
    [409, { name: "Rampardos" }],
    [410, { name: "Shieldon" }],
    [411, { name: "Bastiodon" }],
    [412, { name: "Burmy" }],
    [413, { name: "Wormadam" }],
    [414, { name: "Mothim" }],
    [415, { name: "Combee" }],
    [416, { name: "Vespiquen" }],
    [417, { name: "Pachirisu" }],
    [418, { name: "Buizel" }],
    [419, { name: "Floatzel" }],
    [420, { name: "Cherubi" }],
    [421, { name: "Cherrim" }],
    [422, { name: "Shellos" }],
    [423, { name: "Gastrodon" }],
    [424, { name: "Ambipom" }],
    [425, { name: "Drifloon" }],
    [426, { name: "Drifblim" }],
    [427, { name: "Buneary" }],
    [428, { name: "Lopunny" }],
    [429, { name: "Mismagius" }],
    [430, { name: "Honchkrow" }],
    [431, { name: "Glameow" }],
    [432, { name: "Purugly" }],
    [433, { name: "Chingling" }],
    [434, { name: "Stunky" }],
    [435, { name: "Skuntank" }],
    [436, { name: "Bronzor" }],
    [437, { name: "Bronzong" }],
    [438, { name: "Bonsly" }],
    [439, { name: "Mime Jr." }],
    [440, { name: "Happiny" }],
    [441, { name: "Chatot" }],
    [442, { name: "Spiritomb" }],
    [443, { name: "Gible" }],
    [444, { name: "Gabite" }],
    [445, { name: "Garchomp" }],
    [446, { name: "Munchlax" }],
    [447, { name: "Riolu" }],
    [448, { name: "Lucario" }],
    [449, { name: "Hippopotas" }],
    [450, { name: "Hippowdon" }],
    [451, { name: "Skorupi" }],
    [452, { name: "Drapion" }],
    [453, { name: "Croagunk" }],
    [454, { name: "Toxicroak" }],
    [455, { name: "Carnivine" }],
    [456, { name: "Finneon" }],
    [457, { name: "Lumineon" }],
    [458, { name: "Mantyke" }],
    [459, { name: "Snover" }],
    [460, { name: "Abomasnow" }],
    [461, { name: "Weavile" }],
    [462, { name: "Magnezone" }],
    [463, { name: "Lickilicky" }],
    [464, { name: "Rhyperior" }],
    [465, { name: "Tangrowth" }],
    [466, { name: "Electivire" }],
    [467, { name: "Magmortar" }],
    [468, { name: "Togekiss" }],
    [469, { name: "Yanmega" }],
    [470, { name: "Leafeon" }],
    [471, { name: "Glaceon" }],
    [472, { name: "Gliscor" }],
    [473, { name: "Mamoswine" }],
    [474, { name: "Porygon-Z" }],
    [475, { name: "Gallade" }],
    [476, { name: "Probopass" }],
    [477, { name: "Dusknoir" }],
    [478, { name: "Froslass" }],
    [479, { name: "Rotom" }],
    [480, { name: "Uxie" }],
    [481, { name: "Mesprit" }],
    [482, { name: "Azelf" }],
    [483, { name: "Dialga" }],
    [484, { name: "Palkia" }],
    [485, { name: "Heatran" }],
    [486, { name: "Regigigas" }],
    [487, { name: "Giratina" }],
    [488, { name: "Cresselia" }],
    [489, { name: "Phione" }],
    [490, { name: "Manaphy" }],
    [491, { name: "Darkrai" }],
    [492, { name: "Shaymin" }],
    [493, { name: "Arceus" }],
    [494, { name: "Victini" }],
    [495, { name: "Snivy" }],
    [496, { name: "Servine" }],
    [497, { name: "Serperior" }],
    [498, { name: "Tepig" }],
    [499, { name: "Pignite" }],
    [500, { name: "Emboar" }],
    [501, { name: "Oshawott" }],
    [502, { name: "Dewott" }],
    [503, { name: "Samurott" }],
    [504, { name: "Patrat" }],
    [505, { name: "Watchog" }],
    [506, { name: "Lillipup" }],
    [507, { name: "Herdier" }],
    [508, { name: "Stoutland" }],
    [509, { name: "Purrloin" }],
    [510, { name: "Liepard" }],
    [511, { name: "Pansage" }],
    [512, { name: "Simisage" }],
    [513, { name: "Pansear" }],
    [514, { name: "Simisear" }],
    [515, { name: "Panpour" }],
    [516, { name: "Simipour" }],
    [517, { name: "Munna" }],
    [518, { name: "Musharna" }],
    [519, { name: "Pidove" }],
    [520, { name: "Tranquill" }],
    [521, { name: "Unfezant" }],
    [522, { name: "Blitzle" }],
    [523, { name: "Zebstrika" }],
    [524, { name: "Roggenrola" }],
    [525, { name: "Boldore" }],
    [526, { name: "Gigalith" }],
    [527, { name: "Woobat" }],
    [528, { name: "Swoobat" }],
    [529, { name: "Drilbur" }],
    [530, { name: "Excadrill" }],
    [531, { name: "Audino" }],
    [532, { name: "Timburr" }],
    [533, { name: "Gurdurr" }],
    [534, { name: "Conkeldurr" }],
    [535, { name: "Tympole" }],
    [536, { name: "Palpitoad" }],
    [537, { name: "Seismitoad" }],
    [538, { name: "Throh" }],
    [539, { name: "Sawk" }],
    [540, { name: "Sewaddle" }],
    [541, { name: "Swadloon" }],
    [542, { name: "Leavanny" }],
    [543, { name: "Venipede" }],
    [544, { name: "Whirlipede" }],
    [545, { name: "Scolipede" }],
    [546, { name: "Cottonee" }],
    [547, { name: "Whimsicott" }],
    [548, { name: "Petilil" }],
    [549, { name: "Lilligant" }],
    [550, { name: "Basculin" }],
    [551, { name: "Sandile" }],
    [552, { name: "Krokorok" }],
    [553, { name: "Krookodile" }],
    [554, { name: "Darumaka" }],
    [555, { name: "Darmanitan" }],
    [556, { name: "Maractus" }],
    [557, { name: "Dwebble" }],
    [558, { name: "Crustle" }],
    [559, { name: "Scraggy" }],
    [560, { name: "Scrafty" }],
    [561, { name: "Sigilyph" }],
    [562, { name: "Yamask" }],
    [563, { name: "Cofagrigus" }],
    [564, { name: "Tirtouga" }],
    [565, { name: "Carracosta" }],
    [566, { name: "Archen" }],
    [567, { name: "Archeops" }],
    [568, { name: "Trubbish" }],
    [569, { name: "Garbodor" }],
    [570, { name: "Zorua" }],
    [571, { name: "Zoroark" }],
    [572, { name: "Minccino" }],
    [573, { name: "Cinccino" }],
    [574, { name: "Gothita" }],
    [575, { name: "Gothorita" }],
    [576, { name: "Gothitelle" }],
    [577, { name: "Solosis" }],
    [578, { name: "Duosion" }],
    [579, { name: "Reuniclus" }],
    [580, { name: "Ducklett" }],
    [581, { name: "Swanna" }],
    [582, { name: "Vanillite" }],
    [583, { name: "Vanillish" }],
    [584, { name: "Vanilluxe" }],
    [585, { name: "Deerling" }],
    [586, { name: "Sawsbuck" }],
    [587, { name: "Emolga" }],
    [588, { name: "Karrablast" }],
    [589, { name: "Escavalier" }],
    [590, { name: "Foongus" }],
    [591, { name: "Amoonguss" }],
    [592, { name: "Frillish" }],
    [593, { name: "Jellicent" }],
    [594, { name: "Alomomola" }],
    [595, { name: "Joltik" }],
    [596, { name: "Galvantula" }],
    [597, { name: "Ferroseed" }],
    [598, { name: "Ferrothorn" }],
    [599, { name: "Klink" }],
    [600, { name: "Klang" }],
    [601, { name: "Klinklang" }],
    [602, { name: "Tynamo" }],
    [603, { name: "Eelektrik" }],
    [604, { name: "Eelektross" }],
    [605, { name: "Elgyem" }],
    [606, { name: "Beheeyem" }],
    [607, { name: "Litwick" }],
    [608, { name: "Lampent" }],
    [609, { name: "Chandelure" }],
    [610, { name: "Axew" }],
    [611, { name: "Fraxure" }],
    [612, { name: "Haxorus" }],
    [613, { name: "Cubchoo" }],
    [614, { name: "Beartic" }],
    [615, { name: "Cryogonal" }],
    [616, { name: "Shelmet" }],
    [617, { name: "Accelgor" }],
    [618, { name: "Stunfisk" }],
    [619, { name: "Mienfoo" }],
    [620, { name: "Mienshao" }],
    [621, { name: "Druddigon" }],
    [622, { name: "Golett" }],
    [623, { name: "Golurk" }],
    [624, { name: "Pawniard" }],
    [625, { name: "Bisharp" }],
    [626, { name: "Bouffalant" }],
    [627, { name: "Rufflet" }],
    [628, { name: "Braviary" }],
    [629, { name: "Vullaby" }],
    [630, { name: "Mandibuzz" }],
    [631, { name: "Heatmor" }],
    [632, { name: "Durant" }],
    [633, { name: "Deino" }],
    [634, { name: "Zweilous" }],
    [635, { name: "Hydreigon" }],
    [636, { name: "Larvesta" }],
    [637, { name: "Volcarona" }],
    [638, { name: "Cobalion" }],
    [639, { name: "Terrakion" }],
    [640, { name: "Virizion" }],
    [641, { name: "Tornadus" }],
    [642, { name: "Thundurus" }],
    [643, { name: "Reshiram" }],
    [644, { name: "Zekrom" }],
    [645, { name: "Landorus" }],
    [646, { name: "Kyurem" }],
    [647, { name: "Keldeo" }],
    [648, { name: "Meloetta" }],
    [649, { name: "Genesect" }],
    [650, { name: "Chespin" }],
    [651, { name: "Quilladin" }],
    [652, { name: "Chesnaught" }],
    [653, { name: "Fennekin" }],
    [654, { name: "Braixen" }],
    [655, { name: "Delphox" }],
    [656, { name: "Froakie" }],
    [657, { name: "Frogadier" }],
    [658, { name: "Greninja" }],
    [659, { name: "Bunnelby" }],
    [660, { name: "Diggersby" }],
    [661, { name: "Fletchling" }],
    [662, { name: "Fletchinder" }],
    [663, { name: "Talonflame" }],
    [664, { name: "Scatterbug" }],
    [665, { name: "Spewpa" }],
    [666, { name: "Vivillon" }],
    [667, { name: "Litleo" }],
    [668, { name: "Pyroar" }],
    [669, { name: "Flabébé" }],
    [670, { name: "Floette" }],
    [671, { name: "Florges" }],
    [672, { name: "Skiddo" }],
    [673, { name: "Gogoat" }],
    [674, { name: "Pancham" }],
    [675, { name: "Pangoro" }],
    [676, { name: "Furfrou" }],
    [677, { name: "Espurr" }],
    [678, { name: "Meowstic" }],
    [679, { name: "Honedge" }],
    [680, { name: "Doublade" }],
    [681, { name: "Aegislash" }],
    [682, { name: "Spritzee" }],
    [683, { name: "Aromatisse" }],
    [684, { name: "Swirlix" }],
    [685, { name: "Slurpuff" }],
    [686, { name: "Inkay" }],
    [687, { name: "Malamar" }],
    [688, { name: "Binacle" }],
    [689, { name: "Barbaracle" }],
    [690, { name: "Skrelp" }],
    [691, { name: "Dragalge" }],
    [692, { name: "Clauncher" }],
    [693, { name: "Clawitzer" }],
    [694, { name: "Helioptile" }],
    [695, { name: "Heliolisk" }],
    [696, { name: "Tyrunt" }],
    [697, { name: "Tyrantrum" }],
    [698, { name: "Amaura" }],
    [699, { name: "Aurorus" }],
    [700, { name: "Sylveon" }],
    [701, { name: "Hawlucha" }],
    [702, { name: "Dedenne" }],
    [703, { name: "Carbink" }],
    [704, { name: "Goomy" }],
    [705, { name: "Sliggoo" }],
    [706, { name: "Goodra" }],
    [707, { name: "Klefki" }],
    [708, { name: "Phantump" }],
    [709, { name: "Trevenant" }],
    [710, { name: "Pumpkaboo" }],
    [711, { name: "Gourgeist" }],
    [712, { name: "Bergmite" }],
    [713, { name: "Avalugg" }],
    [714, { name: "Noibat" }],
    [715, { name: "Noivern" }],
    [716, { name: "Xerneas" }],
    [717, { name: "Yveltal" }],
    [718, { name: "Zygarde" }],
    [719, { name: "Diancie" }],
    [720, { name: "Hoopa" }],
    [721, { name: "Volcanion" }],
    [722, { name: "Rowlet" }],
    [723, { name: "Dartrix" }],
    [724, { name: "Decidueye" }],
    [725, { name: "Litten" }],
    [726, { name: "Torracat" }],
    [727, { name: "Incineroar" }],
    [728, { name: "Popplio" }],
    [729, { name: "Brionne" }],
    [730, { name: "Primarina" }],
    [731, { name: "Pikipek" }],
    [732, { name: "Trumbeak" }],
    [733, { name: "Toucannon" }],
    [734, { name: "Yungoos" }],
    [735, { name: "Gumshoos" }],
    [736, { name: "Grubbin" }],
    [737, { name: "Charjabug" }],
    [738, { name: "Vikavolt" }],
    [739, { name: "Crabrawler" }],
    [740, { name: "Crabominable" }],
    [741, { name: "Oricorio" }],
    [742, { name: "Cutiefly" }],
    [743, { name: "Ribombee" }],
    [744, { name: "Rockruff" }],
    [745, { name: "Lycanroc" }],
    [746, { name: "Wishiwashi" }],
    [747, { name: "Mareanie" }],
    [748, { name: "Toxapex" }],
    [749, { name: "Mudbray" }],
    [750, { name: "Mudsdale" }],
    [751, { name: "Dewpider" }],
    [752, { name: "Araquanid" }],
    [753, { name: "Fomantis" }],
    [754, { name: "Lurantis" }],
    [755, { name: "Morelull" }],
    [756, { name: "Shiinotic" }],
    [757, { name: "Salandit" }],
    [758, { name: "Salazzle" }],
    [759, { name: "Stufful" }],
    [760, { name: "Bewear" }],
    [761, { name: "Bounsweet" }],
    [762, { name: "Steenee" }],
    [763, { name: "Tsareena" }],
    [764, { name: "Comfey" }],
    [765, { name: "Oranguru" }],
    [766, { name: "Passimian" }],
    [767, { name: "Wimpod" }],
    [768, { name: "Golisopod" }],
    [769, { name: "Sandygast" }],
    [770, { name: "Palossand" }],
    [771, { name: "Pyukumuku" }],
    [772, { name: "Type: Null" }],
    [773, { name: "Silvally" }],
    [774, { name: "Minior" }],
    [775, { name: "Komala" }],
    [776, { name: "Turtonator" }],
    [777, { name: "Togedemaru" }],
    [778, { name: "Mimikyu" }],
    [779, { name: "Bruxish" }],
    [780, { name: "Drampa" }],
    [781, { name: "Dhelmise" }],
    [782, { name: "Jangmo-o" }],
    [783, { name: "Hakamo-o" }],
    [784, { name: "Kommo-o" }],
    [785, { name: "Tapu Koko" }],
    [786, { name: "Tapu Lele" }],
    [787, { name: "Tapu Bulu" }],
    [788, { name: "Tapu Fini" }],
    [789, { name: "Cosmog" }],
    [790, { name: "Cosmoem" }],
    [791, { name: "Solgaleo" }],
    [792, { name: "Lunala" }],
    [793, { name: "Nihilego" }],
    [794, { name: "Buzzwole" }],
    [795, { name: "Pheromosa" }],
    [796, { name: "Xurkitree" }],
    [797, { name: "Celesteela" }],
    [798, { name: "Kartana" }],
    [799, { name: "Guzzlord" }],
    [800, { name: "Necrozma" }],
    [801, { name: "Magearna" }],
    [802, { name: "Marshadow" }],
    [803, { name: "Poipole" }],
    [804, { name: "Naganadel" }],
    [805, { name: "Stakataka" }],
    [806, { name: "Blacephalon" }],
    [807, { name: "Zeraora" }],
    [808, { name: "Meltan" }],
    [809, { name: "Melmetal" }],
    [810, { name: "Grookey" }],
    [811, { name: "Thwackey" }],
    [812, { name: "Rillaboom" }],
    [813, { name: "Scorbunny" }],
    [814, { name: "Raboot" }],
    [815, { name: "Cinderace" }],
    [816, { name: "Sobble" }],
    [817, { name: "Drizzile" }],
    [818, { name: "Inteleon" }],
    [819, { name: "Skwovet" }],
    [820, { name: "Greedent" }],
    [821, { name: "Rookidee" }],
    [822, { name: "Corvisquire" }],
    [823, { name: "Corviknight" }],
    [824, { name: "Blipbug" }],
    [825, { name: "Dottler" }],
    [826, { name: "Orbeetle" }],
    [827, { name: "Nickit" }],
    [828, { name: "Thievul" }],
    [829, { name: "Gossifleur" }],
    [830, { name: "Eldegoss" }],
    [831, { name: "Wooloo" }],
    [832, { name: "Dubwool" }],
    [833, { name: "Chewtle" }],
    [834, { name: "Drednaw" }],
    [835, { name: "Yamper" }],
    [836, { name: "Boltund" }],
    [837, { name: "Rolycoly" }],
    [838, { name: "Carkol" }],
    [839, { name: "Coalossal" }],
    [840, { name: "Applin" }],
    [841, { name: "Flapple" }],
    [842, { name: "Appletun" }],
    [843, { name: "Silicobra" }],
    [844, { name: "Sandaconda" }],
    [845, { name: "Cramorant" }],
    [846, { name: "Arrokuda" }],
    [847, { name: "Barraskewda" }],
    [848, { name: "Toxel" }],
    [849, { name: "Toxtricity" }],
    [850, { name: "Sizzlipede" }],
    [851, { name: "Centiskorch" }],
    [852, { name: "Clobbopus" }],
    [853, { name: "Grapploct" }],
    [854, { name: "Sinistea" }],
    [855, { name: "Polteageist" }],
    [856, { name: "Hatenna" }],
    [857, { name: "Hattrem" }],
    [858, { name: "Hatterene" }],
    [859, { name: "Impidimp" }],
    [860, { name: "Morgrem" }],
    [861, { name: "Grimmsnarl" }],
    [862, { name: "Obstagoon" }],
    [863, { name: "Perrserker" }],
    [864, { name: "Cursola" }],
    [865, { name: "Sirfetch'd" }],
    [866, { name: "Mr. Rime" }],
    [867, { name: "Runerigus" }],
    [868, { name: "Milcery" }],
    [869, { name: "Alcremie" }],
    [870, { name: "Falinks" }],
    [871, { name: "Pincurchin" }],
    [872, { name: "Snom" }],
    [873, { name: "Frosmoth" }],
])