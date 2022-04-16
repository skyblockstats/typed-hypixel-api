// pyromancer
// cryomancer
// aquamancer
// berserker
// defender
// avenger
// crusader
// protector
// thunderlord
// earthwarden

// mage
// warrior
// paladin
// shaman

type Class = 'mage' | 'warrior' | 'paladin' | 'shaman'
type PerClassStat =
	| 'armor_selection'
	| 'cooldown'
	| 'critchance'
	| 'critmultiplier'
	| 'energy'
	| 'health'
	| 'helmet_selection'
	| 'plays'
	| 'skill1'
	| 'skill2'
	| 'skill3'
	| 'skill4'
	| 'skill5'

export type WarlordsStats = Partial<Record<`${Class}_${PerClassStat}`, number>> & {
	newcontrol_disable?: 1
	newcontrol_enable?: 2
	hotkeymode?: boolean

	pyromancer_plays?: number
	cryomancer_plays?: number
	aquamancer_plays?: number
	berserker_plays?: number
	defender_plays?: number
	avenger_plays?: number
	crusader_plays?: number
	protector_plays?: number
	thunderlord_plays?: number
	earthwarden_plays?: number

	losses: number
	damage_mage?: number
	damage_warrior?: number
	damage_paladin?: number
	damage_shaman?: number
	damage_pyromancer?: number
	damage_cryomancer?: number
	damage_aquamancer?: number
	damage_berserker?: number
	damage_defender?: number
	damage_avenger?: number
	damage_crusader?: number
	damage_protector?: number
	damage_thunderlord?: number
	damage_earthwarden?: number

	damage_prevented_mage?: number
	damage_prevented_warrior?: number
	damage_prevented_paladin?: number
	damage_prevented_shaman?: number
	damage_prevented_pyromancer?: number
	damage_prevented_cryomancer?: number
	damage_prevented_aquamancer?: number
	damage_prevented_berserker?: number
	damage_prevented_defender?: number
	damage_prevented_avenger?: number
	damage_prevented_crusader?: number
	damage_prevented_protector?: number
	damage_prevented_thunderlord?: number
	damage_prevented_earthwarden?: number

	heal_mage?: number
	heal_warrior?: number
	heal_paladin?: number
	heal_shaman?: number
	heal_pyromancer?: number
	heal_cryomancer?: number
	heal_aquamancer?: number
	heal_berserker?: number
	heal_defender?: number
	heal_avenger?: number
	heal_crusader?: number
	heal_protector?: number
	heal_thunderlord?: number
	heal_earthwarden?: number

	losses_mage?: number
	losses_warrior?: number
	losses_paladin?: number
	losses_shaman?: number
	losses_pyromancer?: number
	losses_cryomancer?: number
	losses_aquamancer?: number
	losses_berserker?: number
	losses_defender?: number
	losses_avenger?: number
	losses_crusader?: number
	losses_protector?: number
	losses_thunderlord?: number
	losses_earthwarden?: number

	wins: number
	wins_blu: number
	wins_red: number
	wins_mage?: number
	wins_warrior?: number
	wins_paladin?: number
	wins_shaman?: number
	wins_pyromancer?: number
	wins_cryomancer?: number
	wins_aquamancer?: number
	wins_berserker?: number
	wins_defender?: number
	wins_avenger?: number
	wins_crusader?: number
	wins_protector?: number
	wins_thunderlord?: number
	wins_earthwarden?: number

	mage_spec?: 'pyromancer' | 'cryomancer' | 'aquamancer'
	warrior_spec?: 'berserker' | 'defender'
	paladin_spec?: 'avenger' | 'crusader' | 'protector'
	shaman_spec?: 'thunderlord' | 'earthwarden'

	assists: number
	broken_inventory: number

	chosen_class: Class

	coins: number
	current_weapon: number

	damage: number
	damage_prevented: number
	damage_taken: number

	deaths: number

	flag_conquer_self?: number
	flag_conquer_team: number

	heal: number

	kills: number
	kills_capturetheflag?: number

	life_leeched: number
	repaired: number
	repaired_common: number
	repaired_rare: number
	selected_mount: string
	weapon_inventory?:
		| {
				spec: {
					spec: number
					playerClass: number
				}
				ability: number
				abilityBoost: number
				damage: number
				energy: number
				chance: number
				multiplier: number
				health: number
				cooldown: number
				movement: number
				material: string
				id: number
				category: string
				crafted: boolean
				upgradeMax: number
				upgradeTimes: number
				playStreak?: boolean | null
		  }[]
		| null
	win_streak: number
	wins_capturetheflag: number
	wins_capturetheflag_blu: number
	wins_capturetheflag_red: number
	wins_domination: number
	wins_domination_blu: number
	wins_domination_red: number

	life_leeched_warrior?: number
	life_leeched_berserker?: number

	magic_dust: number
	salvaged_weapons: number
	salvaged_weapons_common: number
	salvaged_dust_reward: number
	salvaged_shards_reward: number
	salvaged_weapons_rare: number
	void_shards: number
	afk_warned: number
	penalty: number
	packages?: string[] | null
	play_streak: number

	wins_teamdeathmatch_a?: number
	wins_teamdeathmatch?: number
	wins_teamdeathmatch_blu?: number
	wins_teamdeathmatch_b?: number
	wins_teamdeathmatch_red?: number

	reroll?: number
	reroll_epic?: number

	salvaged_weapons_epic?: number
	wins_capturetheflag_a?: number

	crafted: number
	crafted_epic: number
	crafted_legendary?: number

	upgrade_crafted: number
	upgrade_crafted_epic?: number
	upgrade_crafted_legendary: number

	reward_inventory?: number
	repaired_epic: number
	repaired_legendary?: number
	wins_domination_a?: number
}
