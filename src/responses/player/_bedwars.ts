type BedwarsDeath = 'void' | 'entity_attack' | 'fall' | 'projectile' | 'expolosion' | 'magic'

type BedwarsStat =
	| 'winstreak'
	| 'games_played_bedwars'
	| 'resources_collected_bedwars'
	| 'gold_resources_collected_bedwars'
	| 'iron_resources_collected_bedwars'
	| 'diamond_resources_collected_bedwars'
	| 'emerald_resources_collected_bedwars'
	| 'wins_bedwars'
	| 'losses_bedwars'
	| 'beds_lost_bedwars'
	| 'beds_broken_bedwars'
	// deaths
	| 'deaths_bedwars'
	| 'final_deaths_bedwars'
	| `${BedwarsDeath}_deaths_bedwars`
	| `${BedwarsDeath}_final_deaths_bedwars`
	// kills
	| 'kills_bedwars'
	| 'final_kills_bedwars'
	| `${BedwarsDeath}_kills_bedwars`
	| `${BedwarsDeath}_final_kills_bedwars`
	// these are two different stats for some reason
	| 'items_purchased_bedwars'
	| '_items_purchased_bedwars'
	| 'permanent _items_purchased_bedwars'

type BedwarsMode =
	| 'castle'
	| 'eight_one'
	| 'eight_two'
	| 'four_three'
	| 'four_four'
	| 'eight_two'
	| 'eight_two_ultimate'
	| 'eight_two_lucky'
	| 'eight_two_voidless'

export type BedwarsStats = { [key in BedwarsStat | `${BedwarsMode}_${BedwarsStat}`]?: number } & {
	packages: string[]
	coins: number

	Experience: number
	Experience_new: number

	first_join_7: boolean

	bedwars_box: number
	bedwars_boxes: number
	bedwars_box_commons: number
	bedwars_box_rares: number
	bedwars_box_epics: number
	bedwars_box_legendaries: number

	Bedwars_openedChests?: number
	Bedwars_openedCommons?: number
	Bedwars_openedRares?: number
	Bedwars_openedEpics?: number
	Bedwars_openedLegendaries?: number

	games_played_bedwars_1: number

	free_event_key_bedwars_halloween_boxes_2017?: true
	free_event_key_bedwars_christmas_boxes_2017?: true
	free_event_key_bedwars_halloween_boxes_2018?: true
	free_event_key_bedwars_halloween_boxes_2021?: true

	shop_sort_enable_owned_first?: boolean
	understands_resource_bank?: true
	understands_streaks?: true
	privategames?: {
		low_gravity: boolean
		no_diamonds: boolean
		bed_instabreak: boolean
		respawn_time: string
	}

	activeNPCSkin: string
	activeIslandTopper?: string
	activeKillEffect?: string
	activeDeathCry?: string
	activeProjectileTrail: string
	activeVictoryDance?: string
	activeKillMessages?: string
	activeGlyph?: string
	activeBedDestroy?: string

	favourites?: string
	favourites_1?: string

	/**
	 * A comma separated list of color code formatted item names, for example
	 * `§5Animated Astronaut Shopkeeper,§aSlime Projectile Trail,§bCoins,§aBed Salesman Shopkeeper,§bBomb Island Topper`.
	 * This field should be used together with `chest_history_new` to get the
	 * correct chest history.
	 */
	chest_history: string
	/**
	 * An array of chest history IDs, for example
	 * `["islandtopper_tree", "projectiletrail_black_smoke"]`.
	 * This field should be used together with `chest_history` to get the
	 * correct chest history.
	 */
	chest_history_new: string[]

	sw_duel_melee_swings_duels?: number
	sw_duel_duels_melee_swings?: number
	sw_duel_melee_swings?: number

	spooky_open_ach?: number
	spray_storage_new?: string
	spray_glyph_field?: string
	shop_sort?: string
	bedwars_halloween_boxes: number
	bedwars_christmas_boxes: number
	seen_beta_menu?: number
	favorite_slots?: string
	bedwars_easter_boxes: number
	selected_ultimate?: string
	lastTourneyAd: number
	lastHytaleAd: number
	practice?: {
		selected: 'BRIDGING'
		bridging: {
			blocks_placed: number
			failed_attempts: number
		}
	}
	selected_challenge_type?: string
}
