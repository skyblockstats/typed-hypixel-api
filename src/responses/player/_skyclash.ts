import { GameInventory } from './_inventory'

type SkyClashPerk =
	| 'nutritious'
	| 'honed_bow'
	| 'sugar_rush'
	| 'skeleton_jockey'
	| 'creeper'
	| 'pearl_absorption'
	| 'blast_protection'
	| 'fruit_finder'
	| 'bigger_bangs'
	| 'pacify'
	| 'void_magnet'
	| 'flower_power'
	| 'mushroom_aura'
	| 'arrow_deflection'
	| 'elven_archer'
	| 'tripleshot'
	| 'alchemy'
	| 'damage_potion'
	| 'chicken_bow'
	| 'hit_and_run'
	| 'invisibility'
	| 'guardian'
	| 'nuclear_solution'
	| 'winged_boots'
	| 'void_warranty'
	| 'headstart'
	| 'energy_drink'
	| 'supply_drop'
	| 'hearty_start'
	| 'rampage'
	| 'resistant'
	| 'blazing_arrows'
	| 'marksman'
type SkyClashKit = 'archer' | 'guardian' | 'swordsman'
type SkyClashStatId =
	| 'games_played'
	| 'melee_kills'
	| 'deaths'
	| 'fastest_win_team_war'
	| 'fastest_win_team_doubles'
	| 'fastest_win_four_teams'
	| 'four_teams_wins'
	| 'assists'
	| 'kills'
	| 'team_war_wins'
	| 'bow_shots'
	| 'most_kills_game'
	| 'longest_bow_shot'
	| 'doubles_wins'
	| 'bow_hits'
	| 'enderchests_opened'
	| 'void_kills'
	| 'mobs_spawned'

export type SkyClashStats = {
	[key in
		| `deaths_perk_${SkyClashPerk}`
		| `losses_perk_${SkyClashPerk}`
		| `kills_perk_${SkyClashPerk}`
		| `wins_perk_${SkyClashPerk}`
		| `perk_${SkyClashPerk}`
		| `perk_${SkyClashPerk}_duplicates`
		| `${SkyClashStatId}_kit_${SkyClashKit}`
		| `kit_${SkyClashKit}_minor`
		| `kit_${SkyClashKit}_master`
		| SkyClashStatId]?: number
} & {
	[key in `perk_${SkyClashPerk}_new` | `${SkyClashKit}_inventory_auto_equip_armor`]?: boolean
} & {
	[key in `${SkyClashKit}_inventory`]?: GameInventory
} & {
	packages: string[]
	coins: number

	active_class?: number

	deaths_doubles?: number
	deaths_team_war?: number
	deaths_four_teams?: number

	losses_doubles?: number
	losses_team_war?: number
	losses_four_teams?: number

	fastest_win_team_war?: number
	fastest_win_doubles?: number
	fastest_win_four_teams?: number

	four_teams_wins?: number

	wins_four_teams?: number

	card_packs: number
	spawn_at_witch: number
	play_streak: number
	win_streak: number
	games: number
	wins: number
	wins_team_war: number
	killstreak: number
	highestKillstreak: number
	playstreak: number
	kills_team_war: number

	kills_weekly_b?: number
	kills_monthly_b?: number

	losses: number
	quits: number

	class_0: string
}
