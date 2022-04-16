export type SurvivalGamesKit =
	| 'arachnologist'
	| 'archer'
	| 'armorer'
	| 'blaze'
	| 'pigman'
	| 'reddragon'
	| 'knight'
	| 'rogue'
	| 'scout'
	| 'snowman'
	| 'speleologist'
	| 'tim'
	| 'toxicologist'
	| 'troll'
	| 'necromancer'
	| 'baker'
	| 'creepertamer'
	| 'fisherman'
	| 'horsetamer'
	| 'meatmaster'
	| 'wolftamer'
	| 'astronaut'
	| 'jockey'
	| 'shadow knight'
	| 'rambo'

export type SurvivalGamesStats = Partial<Record<SurvivalGamesKit, number>> &
	Partial<Record<`time_played_${SurvivalGamesKit}`, number>> &
	Partial<Record<`damage_taken_${SurvivalGamesKit}`, number>> &
	Partial<Record<`games_played_${SurvivalGamesKit}`, number>> &
	Partial<Record<`chests_opened_${SurvivalGamesKit}`, number>> &
	Partial<Record<`damage_${SurvivalGamesKit}`, number>> &
	Partial<Record<`potions_drunk_${SurvivalGamesKit}`, number>> &
	Partial<Record<`mobs_spawned_${SurvivalGamesKit}`, number>> &
	Partial<Record<`kills_${SurvivalGamesKit}`, number>> & {
		kit_permutations_hunter?: `${number}`

		chosen_taunt: string

		blood?: boolean
		chosen_victorydance: string
		coins: number
		deaths: number
		kills: number
		packages?: string[] | null
		wins: number

		monthly_kills_a?: number
		weekly_kills_a?: number
		weekly_kills_b?: number

		defaultkit?: SurvivalGamesKit

		HorsetamerInventory?: HungerGamesInventory
		SnowmanInventory?: HungerGamesInventory
		BlazeInventory?: HungerGamesInventory
		JockeyInventory?: HungerGamesInventory

		rambo_wins?: number

		time_played?: number
		damage_taken?: number
		games_played?: number
		chests_opened?: number
		damage?: number
		potions_drunk?: number

		blocks_traveled_horse_horsetamer?: number

		afterkill?: string
		wins_teams?: number
		aura: string
		toggled?: boolean

		mobs_spawned?: number
		lastTourneyAd: number

		teams_blitz_extra_time?: number
		solo_blitz_extra_time?: number
		solo_no_kits_blitz_extra_time?: number

		wins_teams_normal?: number
		wins_backup?: number
		wins_solo_normal?: number
		kills_solo_normal?: number

		arrows_hit?: number
		arrows_hit_jockey?: number
		exp_jockey?: number
	}

export interface HungerGamesInventory {
	[key: number]: string
}
