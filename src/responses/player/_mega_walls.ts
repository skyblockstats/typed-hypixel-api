type UppercaseFirstLetter<S extends string> = S extends `${infer FirstLetter}${infer Remainder}`
	? `${Uppercase<FirstLetter>}${Remainder}`
	: Uppercase<S>

export type MegaWallsClass =
	| 'golem'
	| 'zombie'
	| 'skeleton'
	| 'herobrine'
	| 'enderman'
	| 'blaze'
	| 'dreadlord'
	| 'spider'
	| 'hunter'
	| 'pirate'
	| 'shaman'
	| 'arcanist'

type MegaWallsClassPascalCase = UppercaseFirstLetter<MegaWallsClass>

type PerClassStats = {
	[key in
		| `losses_practice_${MegaWallsClassPascalCase}`
		| `losses_${MegaWallsClassPascalCase}`
		| `weeklyLosses_${MegaWallsClassPascalCase}`
		| `deaths_${MegaWallsClassPascalCase}`
		| `deaths_new_${MegaWallsClassPascalCase}`
		| `weeklyDeaths_${MegaWallsClassPascalCase}`
		| `weeklyLosses_face_off_${MegaWallsClassPascalCase}`
		| `weeklyLosses_practice_${MegaWallsClassPascalCase}`
		| `kills_${MegaWallsClassPascalCase}`
		| `weeklyKills_${MegaWallsClassPascalCase}`
		| `weekly_finalKills_${MegaWallsClassPascalCase}_a`
		| `monthly_finalKills_${MegaWallsClassPascalCase}_a`
		| `wins_${MegaWallsClassPascalCase}`
		| `finalKills_${MegaWallsClassPascalCase}`
		| `chosen_skin_${MegaWallsClassPascalCase}`
		| `weeklyWins_comp_solo_${MegaWallsClassPascalCase}`
		| `${MegaWallsClass}_a`
		| `${MegaWallsClass}_a_activations`
		| `${MegaWallsClass}_a_activations_standard`
		| `${MegaWallsClass}_a_damage_dealt`
		| `${MegaWallsClass}_a_damage_dealt_standard`
		| `${MegaWallsClass}_a_defender_kills`
		| `${MegaWallsClass}_a_defender_kills_standard`
		| `${MegaWallsClass}_a_kills`
		| `${MegaWallsClass}_a_kills_melee`
		| `${MegaWallsClass}_a_kills_melee_behind`
		| `${MegaWallsClass}_a_kills_melee_behind_standard`
		| `${MegaWallsClass}_a_kills_melee_standard`
		| `${MegaWallsClass}_a_kills_standard`
		| `${MegaWallsClass}_a_total_kills`
		| `${MegaWallsClass}_a_total_kills_standard`
		| `${MegaWallsClass}_activations`
		| `${MegaWallsClass}_activations_standard`
		| `${MegaWallsClass}_arrows_fired`
		| `${MegaWallsClass}_arrows_fired_standard`
		| `${MegaWallsClass}_arrows_hit`
		| `${MegaWallsClass}_arrows_hit_standard`
		| `${MegaWallsClass}_assists`
		| `${MegaWallsClass}_assists_standard`
		| `${MegaWallsClass}_b`
		| `${MegaWallsClass}_b_assists`
		| `${MegaWallsClass}_b_assists_standard`
		| `${MegaWallsClass}_b_defender_assists`
		| `${MegaWallsClass}_b_defender_assists_standard`
		| `${MegaWallsClass}_b_total_kills`
		| `${MegaWallsClass}_b_total_kills_standard`
		| `${MegaWallsClass}_blocks_broken`
		| `${MegaWallsClass}_blocks_broken_standard`
		| `${MegaWallsClass}_c`
		| `${MegaWallsClass}_d`
		| `${MegaWallsClass}_damage_dealt`
		| `${MegaWallsClass}_damage_dealt_standard`
		| `${MegaWallsClass}_deaths`
		| `${MegaWallsClass}_deaths_standard`
		| `${MegaWallsClass}_defender_assists`
		| `${MegaWallsClass}_defender_assists_standard`
		| `${MegaWallsClass}_defender_kills`
		| `${MegaWallsClass}_defender_kills_standard`
		| `${MegaWallsClass}_enderchest_level`
		| `${MegaWallsClass}_final_deaths`
		| `${MegaWallsClass}_final_deaths_standard`
		| `${MegaWallsClass}_final_kills`
		| `${MegaWallsClass}_final_kills_standard`
		| `${MegaWallsClass}_g`
		| `${MegaWallsClass}_games_played`
		| `${MegaWallsClass}_games_played_standard`
		| `${MegaWallsClass}_kills`
		| `${MegaWallsClass}_kills_melee`
		| `${MegaWallsClass}_kills_melee_behind`
		| `${MegaWallsClass}_kills_melee_behind_standard`
		| `${MegaWallsClass}_kills_melee_standard`
		| `${MegaWallsClass}_kills_standard`
		| `${MegaWallsClass}_losses`
		| `${MegaWallsClass}_losses_standard`
		| `${MegaWallsClass}_meters_fallen`
		| `${MegaWallsClass}_meters_fallen_standard`
		| `${MegaWallsClass}_meters_walked`
		| `${MegaWallsClass}_meters_walked_standard`
		| `${MegaWallsClass}_potions_drunk`
		| `${MegaWallsClass}_potions_drunk_standard`
		| `${MegaWallsClass}_prestige_level`
		| `${MegaWallsClass}_reclaimed`
		| `${MegaWallsClass}_reclaimed_standard`
		| `${MegaWallsClass}_time_played`
		| `${MegaWallsClass}_time_played_standard`
		| `${MegaWallsClass}_total_deaths`
		| `${MegaWallsClass}_total_deaths_standard`
		| `${MegaWallsClass}_total_final_kills`
		| `${MegaWallsClass}_total_final_kills_standard`
		| `${MegaWallsClass}_total_kills`
		| `${MegaWallsClass}_total_kills_standard`
		| `${MegaWallsClass}_wins`
		| `${MegaWallsClass}_wins_standard`
		| `${MegaWallsClass}_meters_walked_face_off`
		| `${MegaWallsClass}_time_played_face_off`]?: number
}

export type MegaWallsStats = PerClassStats & {
	coins: number
	packages: string[]

	Herobrine_effect?: string
	Pigman_effect?: string
	RED_effect?: string

	activations?: number
	activations_deathmatch?: number
	activations_deathmatch_standard?: number
	activations_face_off?: number
	activations_gvg?: number
	activations_standard?: number

	amount_healed?: number
	amount_healed_standard?: number

	arrows_fired?: number
	arrows_fired_standard?: number
	arrows_hit?: number
	arrows_hit_standard?: number

	assists?: number
	assists_standard?: number

	arcanist_enderchest_level: number

	blocks_broken?: number
	blocks_broken_face_off?: number
	blocks_broken_gvg?: number
	blocks_broken_standard?: number
	blocks_placed?: number
	blocks_placed_face_off?: number
	blocks_placed_gvg?: number
	blocks_placed_preparation?: number
	blocks_placed_preparation_face_off?: number
	blocks_placed_preparation_gvg?: number
	blocks_placed_preparation_standard?: number
	blocks_placed_standard?: number

	enderman_meters_fallen_face_off?: number
	enderman_meters_fallen?: number
	enderman_time_played_face_off?: number

	blood: boolean

	chosen_class: string

	classes: Partial<
		Record<
			Lowercase<MegaWallsClass>,
			{
				prestige?: number
				enderchest_rows?: number
				unlocked?: boolean

				skill_level_a?: number
				skill_level_b?: number
				skill_level_c?: number
				skill_level_d?: number
				skill_level_g?: number

				skill_level_aChecked4?: boolean
				skill_level_bChecked4?: boolean
				skill_level_cChecked4?: boolean
				skill_level_dChecked4?: boolean
				skill_level_gChecked4?: boolean

				prestigeChecked4?: boolean
				checked4?: boolean

				skill_level_aChecked5?: boolean
				skill_level_bChecked5?: boolean
				skill_level_cChecked5?: boolean
				skill_level_dChecked5?: boolean
				skill_level_gChecked5?: boolean
			}
		>
	>

	colorblind?: boolean

	damage_dealt?: number
	damage_dealt_standard?: number

	deaths: number
	deaths_standard?: number

	defender_assists?: number
	defender_assists_standard?: number
	defender_kills?: number
	defender_kills_standard?: number

	finalDeaths?: number
	finalKills?: number

	final_assists?: number
	final_assists_gvg?: number
	final_assists_standard?: number
	final_deaths?: number
	final_deaths_standard?: number
	final_kills?: number
	final_kills_standard?: number

	food_eaten?: number
	food_eaten_gvg?: number
	food_eaten_standard?: number

	games_played?: number
	games_played_face_off?: number
	games_played_gvg?: number
	games_played_standard?: number

	golden_apples_eaten?: number
	golden_apples_eaten_standard?: number

	gvg_decide?: boolean
	iron_armor_gifted?: number
	iron_armor_gifted_standard?: number
	iron_ore_broken?: number
	iron_ore_broken_standard?: number

	kills: number
	kills_melee?: number
	kills_melee_behind?: number
	kills_melee_behind_standard?: number
	kills_melee_standard?: number
	kills_standard?: number

	losses?: number

	losses_face_off?: number
	losses_practice?: number
	losses_standard?: number

	meters_fallen: number
	meters_fallen_face_off: number
	meters_fallen_gvg?: number
	meters_fallen_standard?: number
	meters_walked?: number
	meters_walked_face_off?: number
	meters_walked_gvg?: number
	meters_walked_speed?: number
	meters_walked_speed_gvg?: number
	meters_walked_speed_standard?: number
	meters_walked_standard?: number

	mutations: string[]
	mutations_visibility: boolean
	mythic_favor?: number

	plays_comp_solo?: number
	plays_face_off?: number
	plays_practice?: number
	plays_standard?: number
	potions_drunk?: number
	potions_drunk_standard?: number
	self_healed?: number
	self_healed_standard?: number

	smiley_kills?: string

	steaks_eaten?: number
	steaks_eaten_gvg?: number
	steaks_eaten_standard?: number

	time_played?: number
	time_played_face_off?: number
	time_played_gvg?: number
	time_played_standard?: number

	total_deaths?: number
	total_deaths_standard?: number
	total_final_kills?: number
	total_final_kills_gvg?: number
	total_final_kills_standard?: number
	total_kills?: number
	total_kills_standard?: number
	treasures_found?: number
	treasures_found_face_off?: number
	treasures_found_standard?: number
	tutorial_completed?: number
	war_cry?: string
	weeklyDeaths?: number
	weeklyDeaths_Pirate?: number
	weeklyKills?: number

	weeklyLosses?: number

	weeklyLosses_face_off?: number
	weeklyLosses_practice?: number

	weeklyWins?: number
	weeklyWins_Golem?: number
	weeklyWins_Pirate?: number
	weeklyWins_Spider?: number
	weeklyWins_comp_solo?: number
	weeklyWins_face_off?: number
	weeklyWins_practice?: number

	wins: number
	wins_comp_solo?: number
	wins_face_off?: number
	wins_gvg?: number
	wins_practice?: number
	wins_standard?: number
	witherCoins?: number
	witherDamage?: number
	wither_damage?: number
	wither_damage_standard?: number
}
