export interface SpeedUhcStats {
	packages: string[]

	activeMasterPerk?: string

	tears: number
	tearWellUses: number

	found_COMMON?: number
	found_RARE?: number

	firstJoinLobby?: boolean

	activeKit_NORMAL: string
	activeKit_INSANE?: string

	deaths: number
	deaths_team?: number
	deaths_kit_basic_normal_default?: number
	deaths_mastery_wild_specialist?: number
	deaths_normal?: number
	deaths_team_normal?: number
	deaths_solo_insane?: number
	deaths_solo?: number
	deaths_insane?: number
	deaths_kit_basic_insane_default?: number
	deaths_team_insane?: number
	deaths_solo_normal?: number

	wins?: number
	wins_normal?: number
	wins_mastery_wild_specialist?: number
	wins_kit_basic_normal_default?: number
	wins_solo_normal?: number
	wins_solo?: number
	wins_insane?: number
	wins_kit_basic_insane_default?: number
	wins_team_insane?: number
	wins_team?: number

	kills?: number
	kills_monthly_a?: number
	kills_solo_normal?: number
	kills_mastery_wild_specialist?: number
	kills_weekly_a?: number
	kills_solo?: number
	kills_normal?: number
	kills_kit_basic_normal_default?: number

	losses: number
	losses_mastery_wild_specialist?: number
	losses_kit_basic_normal_default?: number
	losses_team?: number
	losses_normal?: number
	losses_team_normal?: number
	losses_solo_insane?: number
	losses_insane?: number
	losses_solo?: number
	losses_kit_basic_insane_default?: number
	losses_team_insane?: number
	losses_solo_normal?: number

	killstreak: number
	killstreak_solo?: number
	killstreak_kit_basic_normal_default?: number
	killstreak_normal?: number

	win_streak: number
	winstreak?: number
	winstreak_solo?: number
	winstreak_kit_basic_normal_default?: number
	winstreak_normal?: number
	winstreak_kit_basic_insane_default?: number
	winstreak_insane?: number
	winstreak_team?: number

	armor_drop?: number
	tool_drop?: number
	weapon_drop?: number
	sugar_drop?: number

	leather_helmet_drop?: number
	iron_helmet_drop?: number
	diamond_helmet_drop?: number

	leather_boots_drop?: number
	gold_boots_drop?: number
	diamond_boots_drop?: number

	leather_chestplate_drop?: number

	stone_axe_drop?: number
	gold_axe_drop?: number
	iron_axe_drop?: number
	diamond_axe_drop?: number

	'§fSplashPotionofSpeed_drop'?: number
	'§fSplashPotionofRegeneration_drop'?: number
	'§fSplashPotionofJump_drop'?: number
	'§fSplashPotionofHeal(4❤)_drop'?: number
	'§fSplashPotionofIncreaseDamage_drop'?: number

	games_normal?: number
	games_solo?: number
	games_team?: number
	games_insane?: number
	games_kit_basic_insane_default?: number
	games_kit_basic_normal_default?: number

	survived_players: number
	survived_players_normal?: number
	survived_players_solo?: number
	survived_players_team?: number
	survived_players_insane?: number
	survived_players_kit_basic_insane_default?: number
	survived_players_kit_basic_normal_default?: number

	normal_telekinesis?: number
	insane_telekinesis?: number

	blocks_broken: number
	blocks_placed: number
	coins: number
	quits: number
	items_enchanted?: number
	games?: number
	firstJoinLobbyInt: number
	salt?: number
	insane_notoriety?: number
	tears_gathered?: number
	normal_bow_flex?: number
	highestWinstreak?: number
	highestKillstreak?: number
	score: number
	movedOver: boolean
}
