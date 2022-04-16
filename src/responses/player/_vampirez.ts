export interface VampireZStats {
	coins?: number
	packages?: string[]

	blood?: boolean
	blood_drinker?: number
	disguise?: string
	drain_punch?: number
	fireproofing?: number
	gold_booster?: number
	gold_starter?: number
	hellborn?: number
	renfield?: number
	theology?: number

	human_deaths?: number
	human_kills?: number
	human_wins?: number
	weekly_human_wins_a?: number
	weekly_human_wins_b?: number
	monthly_human_wins_a?: number
	monthly_human_wins_b?: number

	vampire_deaths?: number
	vampire_doubler?: number
	vampire_kills?: number
	most_vampire_kills?: number
	weekly_vampire_wins_a?: number
	monthly_vampire_wins_a?: number
	monthly_vampire_wins_b?: number
	weekly_vampire_wins_b?: number

	zombie_doubler?: number
	zombie_kills?: number

	explosive_killer: number
	vampiric_minion?: number

	blood_booster?: number
	kill_booster?: number
	wave_booster?: number

	baby_hater?: number

	final_breath?: number
	terror_level?: number
	constitution?: number

	gold_bought?: number

	loot_drops: number
	foresight?: number

	'bought_dye_color:[rgb0x0ffff]'?: boolean
	'bought_dye_color:[rgb0xffff0]'?: boolean
	'bought_dye_color:[rgb0x00ff]'?: boolean
	'bought_dye_color:[rgb0x80080]'?: boolean
	'bought_dye_color:[rgb0x808080]'?: boolean

	updated_stats: boolean
	vampire_wins?: number
	expert_swag: number
	vamp_color?: string
	frankensteins_monster?: number
	most_vampire_kills_new?: number

	using_old_vamp?: boolean
	using_old?: boolean

	advanced_swag: number
	basic_swag?: number
}
