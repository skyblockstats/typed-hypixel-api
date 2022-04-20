type MurderMysteryMap =
	| 'hypixel_world'
	| 'ancient_tomb'
	| 'cruise_ship'
	| 'transport'
	| 'towerfall'
	| 'gold_rush'
	| 'headquarters'
	| 'hollywood'
	| 'darkfall'
	| 'san_peratico'
	| 'library'
	| 'mountain'
	| 'archives'

type MurderMysteryMode =
	| 'MURDER_CLASSIC'
	| 'MURDER_ASSASSINS'
	| 'MURDER_INFECTION'
	| 'MURDER_SHOWDOWN'
	| 'MURDER_WILD_REVOLVERS'

// todo: check if was_hero/bow_kills/detective_wins is possible to get in modes other than classic
type MurderMysteryStat =
	| 'games'
	| 'was_hero'
	| 'bow_kills'
	| 'wins'
	| 'detective_wins'
	| 'deaths'
	| 'coins_pickedup'
	| 'knife_kills'
	| 'thrown_knife_kills'
	| 'kills'
	| 'longest_time_as_survivor_seconds'
	| 'total_time_survived_seconds'

export type MurderMysteryStats = {
	[key in
		| MurderMysteryStat
		| `${MurderMysteryStat}_${MurderMysteryMode}`
		| `${MurderMysteryStat}_${MurderMysteryMap}_${MurderMysteryMode}`
		| `kills_as_infected_${MurderMysteryMap}_MURDER_INFECTION`]?: number
} & {
	murdermystery_books?: ['detective'?, 'innocent'?, 'murderer'?]
	detective_chance?: number
	packages: string[]
	coins: number

	MurderMystery_openedRares: number
	MurderMystery_openedCommons: number
	MurderMystery_openedChests: number
	MurderMystery_openedEpics?: number

	mm_chest_history?: string[]
	mm_chests: number
	mm_christmas_chests: number
	mm_halloween_chests: number
	chest_history_new?: string[]

	granted_chests: number
	murderer_chance: number
	showqueuebook: boolean
	active_last_words: string
	active_kill_note: string
	active_gesture: string
	active_animated_hat: string
	shop_sort: string
	shop_sort_enable_owned_first: boolean
}
