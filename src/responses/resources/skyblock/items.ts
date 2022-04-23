import { SkyBlockSlayerBosses } from '../../skyblock/_profile_member'

type EssenceType = 'DIAMOND'

export interface SkyBlockItemsResponse {
	success: true
	lastUpdated: number
	items: ({
		material: string
		durability?: number
		name: string
		glowing?: boolean
		furniture?: string
		category?: string
		tier?: string
		unstackable?: boolean
		stats?: {
			DAMAGE?: number
			STRENGTH?: number
			DEFENSE?: Number
			HEALTH?: number
			MINING_FORTUNE?: number
			WALK_SPEED?: number
			MAGIC_FIND?: number
		}
		/**
		 * The number of coins that the player gets from selling the item to
		 * an NPC.
		 */
		npc_sell_price?: number
		/**
		 * If present, this item can be converted into a dungeon item by
		 * using essence.
		 */
		dungeon_item_conversion_cost?: {
			essence_type: EssenceType
			amount: number
		}
		upgrade_costs?: [
			{
				essence_type: EssenceType
				amount: number
			}
		][]
		gemstone_slots?: {
			slot_type: 'AMETHYST' | 'COMBAT'
			costs?: (
				| {
						coins: number
				  }
				| {
						item_id: `FINE_${string}_GEM`
						amount: number
				  }
			)[]
		}[]
		essence?: {
			essence_type: string
			costs: number[]
		}
		catacombs_requirements?: {
			dungeon: {
				type: string
				level: number
			}
		}
		tiered_stats?: {
			WALK_SPEED: number[]
			DEFENSE: number[]
		}
		requirements?: {
			/** If present, you need a specific level in a dungeon. */
			dungeon?: {
				type: 'CATACOMBS'
				level: number
			}
			/**
			 * If present, a reputation with one of the factions from
			 * the nether is required.
			 */
			nether_reputation?: {
				faction: 'BARBARIANS' | 'MAGES'
				/** The number of reputation needed to meet this requirement. */
				reputation: number
				coop_total: true
			}
			/** If present, a specific slayer boss level is required. */
			slayer?: {
				slayer_boss_type: SkyBlockSlayerBosses
				level: number
			}
		}
		dungeon_item?: boolean
		/**
		 * If this is 'COOP', that means the item cannot be transferred to anyone outside the coop.
		 */
		soulbound?: 'COOP'
		/**
		 * Whether the item can be put on display in the museum.
		 * https://hypixel-skyblock.fandom.com/wiki/Museum
		 */
		museum?: true
		id: string
	} & (
		| {
				generator: string
				generator_tier: number
		  }
		| {}
	) &
		(
			| {
					material: 'SKULL_ITEM'
					skin: string
			  }
			| {}
		) &
		(
			| {
					material: 'LEATHER_CHESTPLATE'
					color: `${number},${number},${number}`
			  }
			| {}
		))[]
}
