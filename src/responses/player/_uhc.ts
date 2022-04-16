export interface UhcStats {
	coins: number
	deaths: number
	equippedKit: string
	heads_eaten: number
	kills: number
	packages: string[]

	perk_alchemy_line_a?: number
	perk_alchemy_line_b?: number
	perk_alchemy_line_c?: number

	perk_armorsmith_line_a?: number
	perk_armorsmith_line_b?: number
	perk_armorsmith_line_c?: number

	perk_cooking_line_a?: number
	perk_cooking_line_b?: number
	perk_cooking_line_c?: number

	perk_enchanting_line_a?: number
	perk_enchanting_line_b?: number
	perk_enchanting_line_c?: number

	perk_engineering_line_a?: number
	perk_engineering_line_b?: number
	perk_engineering_line_c?: number

	perk_survivalism_line_a?: number
	perk_survivalism_line_b?: number
	perk_survivalism_line_c?: number

	perk_weaponsmith_line_a?: number
	perk_weaponsmith_line_b?: number
	perk_weaponsmith_line_c?: number

	perk_bloodcraft_line_a?: number
	perk_bloodcraft_line_b?: number
	perk_bloodcraft_line_c?: number

	perk_hunter_line_a?: number
	perk_hunter_line_b?: number
	perk_hunter_line_c?: number

	perk_equestrian_line_a?: number
	perk_equestrian_line_b?: number
	perk_equestrian_line_c?: number

	perk_toolsmithing_line_a?: number
	perk_toolsmithing_line_b?: number
	perk_toolsmithing_line_c?: number

	perk_apprentice_line_a?: number
	perk_apprentice_line_b?: number
	perk_apprentice_line_c?: number

	perk_invention_line_a?: number
	perk_invention_line_b?: number
	perk_invention_line_c?: number

	score: number
	wins: number

	monthly_kills_a?: number
	monthly_kills__a?: number
	monthly_kills_b?: number
	monthly_kills__b?: number
	monthly_kills__solo_b?: number

	monthly_wins__a?: number
	monthly_wins__b?: number
	monthly_wins__solo_a?: number
	monthly_wins__solo_b?: number

	kit_ARCHERY_TOOLS?: number
	kit_LEATHER_ARMOR?: number
	kit_LOOTER?: number
	kit_WORKING_TOOLS?: number
	kit_MAGIC_TOOLS?: number
	kit_LUNCH_BOX?: number
	kit_ECOLOGIST?: number
	kit_ALCHEMIST?: number
	kit_HORSEMAN?: number
	kit_FARMER?: number
	kit_TRAPPER?: number

	cache3: boolean
	wins_solo: number
	kills_solo: number

	perk_weaponsmith_prestige?: number
	perk_bloodcraft_prestige?: number
	perk_armorsmith_prestige?: number
	perk_alchemy_prestige?: number
	perk_survivalism_prestige?: number
	perk_engineering_prestige?: number
	perk_enchanting_prestige?: number

	heads_eaten_solo?: number
	deaths_solo?: number
	perk_hunter_prestige?: number
	perk_cooking_prestige?: number
	clearup_achievement?: boolean
	'wins_disco mode'?: number
	'deaths_disco mode'?: number
	wins_vanilla?: number
	'deaths_red vs blue'?: number
	perk_equestrian_prestige?: number
	perk_toolsmithing_prestige?: number
	deaths_vanilla?: number
	'heads_eaten_red vs blue'?: number
	'wins_red vs blue'?: number
	'kills_red vs blue'?: number
	privategames?: {
		mode_type: string
		infinite_crafts: boolean
		all_recipes: boolean
		mode: string
	}
	kills2: number
	saved_stats: boolean
	kills_solo2?: number

	wins2: number
	wins_solo2?: number
	'wins_vanilla doubles'?: number
	'wins_no diamonds'?: number
	wins_brawl?: number
	'deaths_vanilla doubles'?: number
	'deaths_duo brawl'?: number
	'deaths_no diamonds'?: number
	'wins_duo brawl'?: number
	'wins_solo brawl'?: number

	solo_uhc_extra_time?: number
	duo_brawl_uhc_extra_time?: number
	solo_brawl_uhc_extra_time?: number
	deaths_brawl?: number
	'deaths_solo brawl'?: number

	uhc_parkour_2?: boolean

	perk_invention_prestige?: number
	teammate_damage?: boolean

	ultimates_crafted?: number
	extra_ultimates_crafted?: number
	extra_ultimates_crafted_solo?: number
	ultimates_crafted_solo?: number
}
