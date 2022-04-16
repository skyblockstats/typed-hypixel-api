import { NBTInventory } from './_inventory'

export interface PitStats {
	profile: {
		outgoing_offers: any[]
		contract_choices: any
		last_save: number
		king_quest: {
			kills: number
		}
		hat_color: number
		reconessence_day: number
		impatient_enabled: boolean
		unlocks: PitUnlock[]
		unlocks_1: PitUnlock[]
		unlocks_9: PitUnlock[]
		unlocks_10: PitUnlock[]
		renown_unlocks: PitUnlock[]
		death_recaps: NBTInventory
		inv_enderchest: NBTInventory
		cash: number
		leaderboard_stats: Record<any, never>
		selected_perk_3: string
		selected_perk_2: string
		selected_perk_1: string
		selected_perk_0: string
		last_contract: number
		cash_during_prestige_3: number
		cash_during_prestige_2: number
		cash_during_prestige_5: number
		cash_during_prestige_4: number
		cash_during_prestige_7: number
		cash_during_prestige_6: number
		cash_during_prestige_9: number
		cash_during_prestige_8: number
		inv_contents: NBTInventory
		cash_during_prestige_1: number
		renown: number
		moved_achievements_1: boolean
		moved_achievements_2: boolean
		items_last_buy: Record<any, never>
		prestiges: Prestige[]
		spire_stash_inv: NBTInventory
		zero_point_three_gold_transfer: boolean
		spire_stash_armor: NBTInventory
		selected_launch_trail: string
		last_midfight_disconnect: number
		inv_armor: NBTInventory
		item_stash: NBTInventory
		login_messages: any[]
		hotbar_favorites: number[]
		xp: number
		cash_during_prestige_10: number
		ended_contracts: EndedContract[]
		bounties: any[]
	}
	pit_stats_ptl: {
		joins: number
		assists: number
		bow_damage_received: number
		cash_earned: number
		damage_dealt: number
		damage_received: number
		deaths: number
		diamond_items_purchased: number
		jumped_into_pit: number
		kills: number
		left_clicks: number
		max_streak: number
		melee_damage_received: number
		playtime_minutes: number
		arrow_hits: number
		arrows_fired: number
		bow_damage_dealt: number
		launched_by_launchers: number
		enderchest_opened: number
		vampire_healed_hp: number
		ingots_cash: number
		ingots_picked_up: number
		enchanted_tier1: number
		enchanted_tier2: number
	}
}

export interface PitUnlock {
	tier: number
	acquireDate: number
	key: string
}

export interface Prestige {
	index: number
	xp_on_prestige: number
	timestamp: number
}

export interface EndedContract {
	difficulty: string
	gold_reward: number
	requirements: {
		kills?: number
		multikill?: number
		ingots?: number
	}
	progress: {
		kills?: number
		ingots?: number
	}
	completion_date: number
	remaining_ticks: number
	key: string
}
