export type SmashHeroesClassPowers = {
	BOTMUN: 'batarang' | 'botmubile' | 'melee' | 'grappling_hook'
	GENERAL_CLUCK: 'bazooka' | 'egg_bazooka' | 'reinforcements'
	THE_BULK: 'seismic_slam' | 'boulder'
	DUSK_CRAWLER: ''
	GOKU: 'ki_blast' | 'kame_beam'
	SANIC: 'onion_cannon'
	idk: 'laser_cannon' | 'homing_missiles' | 'monster_mash'
	SKULLFIRE: 'desert_eagle' | 'flaming_desert_eagle' | 'melee' | 'grenade'
	MARAUDER: 'force_pull' | 'melee' | 'force_lightning'
	FROSTY: 'melee' | 'frostbolt' | 'freezing_breath'
	SPODERMAN: 'melee' | 'spooder_buddies' | 'web_shot' | 'spider_kick'
	TINMAN: 'laser_cannon'
	CAKE_MONSTER: 'cake_storm' | 'defecake' | 'swing_pin' | 'throw_cake'
}

type SmashHeroesAllPowers = SmashHeroesClassPowers[keyof SmashHeroesClassPowers]
type SmashHeroesClasses = keyof SmashHeroesClassPowers

type SmashHeroesVariableStats = {
	[key in
		| `lastLevel_${SmashHeroesClasses}`
		| `xp_${SmashHeroesClasses}`
		| `pg_${SmashHeroesClasses}`]?: number
}

export type SmashHeroesStats = SmashHeroesVariableStats & {
	smashLevel: number
	active_class: string
	win_streak?: number
	class_stats: {
		[key in SmashHeroesClasses]?: SmashHeroesClassStats & {
			[power in SmashHeroesAllPowers]?: power extends SmashHeroesClassPowers[key]
				? SuperSmashPowerStats
				: {
						smashed: number
						smashed_normal?: number
						smashed_teams?: number
				  }
		}
	}
	damage_dealt: number
	coins: number

	losses: number
	losses_normal?: number
	losses_2v2?: number
	losses_teams?: number
	losses_weekly_a?: number
	losses_weekly_b?: number
	losses_monthly_a?: number
	losses_monthly_b?: number

	games: number
	games_normal?: number
	games_2v2?: number
	games_teams?: number
	games_weekly_a?: number
	games_weekly_b?: number
	games_monthly_a?: number
	games_monthly_b?: number

	deaths?: number
	deaths_normal?: number
	deaths_2v2?: number
	deaths_teams?: number

	kills?: number
	kills_normal?: number
	kills_2v2?: number
	kills_teams?: number
	kills_weekly_a?: number
	kills_weekly_b?: number
	kills_monthly_a?: number
	kills_monthly_b?: number

	damage_dealt_normal?: number
	damage_dealt_2v2?: number
	damage_dealt_teams?: number

	FRIENDS_firstGame: number
	FRIENDS_gamesDay: number

	smasher?: number
	smasher_normal?: number
	smasher_2v2?: number
	smasher_teams?: number

	smashed?: number
	smashed_normal?: number
	smashed_teams?: number
	smashed_2v2?: number

	wins_normal?: number
	wins_2v2?: number
	wins_teams?: number
	wins_weekly_a?: number
	wins_monthly_b?: number
	wins_weekly_b?: number
	wins_monthly_a?: number

	friend_losses: number
	friend_wins: number
	friend_wins_normal: number

	quits: number
	wins: number
	smash_level_total: number
	assists: number
	assists_normal: number
	friend_losses_normal: number
	classes: Partial<Record<keyof SmashHeroesClassPowers, true>>

	one_v_one_losses?: number
	one_v_one_losses_normal?: number
	one_v_one_wins?: number
	one_v_one_wins_normal?: number

	votes_Gunmetal?: number
}

export interface SmashHeroesClassStats {
	deaths?: number
	games_normal?: number
	games: number
	kills?: number
	damage_dealt_normal?: number
	kills_normal?: number
	damage_dealt: number
	deaths_normal?: number
	win_streak?: number
	smasher?: number
	smasher_normal?: number

	losses: number
	losses_normal?: number
	losses_teams?: number
	losses_2v2?: number

	/** The number of times we've been smashed by this attack. */
	smashed?: number
	/** The number of times we've been smashed by this attack in normal mode. */
	smashed_normal?: number
	/** The number of times we've been smashed by this attack in 2v2v2 mode. */
	smashed_teams?: number
	/** The number of times we've been smashed by this attack in 2v2 mode. */
	smashed_2v2?: number

	wins_normal?: number
	wins_teams?: number
	wins_2v2?: number

	friend_losses?: number
	friend_losses_normal?: number

	win_streak_normal?: number
	wins?: number
	kills_teams?: number
	win_streak_teams?: number
	deaths_teams?: number
	games_teams?: number
	smasher_teams?: number
	damage_dealt_teams?: number
	kills_2v2?: number
	damage_dealt_2v2?: number
	smasher_2v2?: number
	deaths_2v2?: number
	games_2v2?: number
	win_streak_2v2?: number
}

export interface SuperSmashPowerStats {
	kills?: number
	kills_normal?: number
	kills_teams?: number
	kills_2v2?: number

	damage_dealt?: number
	damage_dealt_normal?: number
	damage_dealt_teams?: number
	damage_dealt_2v2?: number

	smasher?: number
	smasher_normal?: number
	smasher_teams?: number
	smasher_2v2?: number

	smashed?: number
	smashed_normal?: number
	smashed_teams?: number
	smashed_2v2?: number
}
