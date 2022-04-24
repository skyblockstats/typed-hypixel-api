import { SkyBlockSlayerBosses } from '../../skyblock/_profile_member'

type EssenceType =
	| 'DIAMOND'
	| 'WITHER'
	| 'GOLD'
	| 'CRIMSON'
	| 'UNDEAD'
	| 'DRAGON'
	| 'SPIDER'
	| 'ICE'
type GemstoneType =
	| 'AMETHYST'
	| 'JASPER'
	| 'RUBY'
	| 'JADE'
	| 'AMBER'
	| 'SAPPHIRE'
	| 'TOPAZ'
	| 'OPAL'

export interface SkyBlockItemsResponse {
	success: true
	lastUpdated: number
	items: ({
		material: string
		/** A record of enchantment ids like `counter_strike` to their default level. */
		enchantments?: Record<string, number>
		durability?: number
		item_durability?: -1
		name: string
		glowing?: boolean
		furniture?: string
		category?: string
		/** If the item is a floating crystal, this will be present. */
		crystal?:
			| 'FISHING'
			| 'FARM'
			| 'RESOURCE_REGENERATOR'
			| 'FOREST_ISLAND'
			| 'WHEAT_ISLAND'
			| 'WOODCUTTING'
			| 'DESERT_ISLAND'
			| 'MITHRIL'
			| 'NETHER_WART_ISLAND'
		tier?: string
		/**
		 * Almost no items have this. Formatting codes here look like
		 * `%%gray%%`.
		 */
		description?: string
		unstackable?: true
		can_have_attributes?: true
		salvageable_from_recipe?: true
		salvages?: (
			| {
					essence_type: EssenceType
					amount: number
			  }
			| {
					item_id: string
					amount: number
			  }
		)[]
		stats?: {
			DAMAGE?: number
			STRENGTH?: number
			DEFENSE?: number
			HEALTH?: number
			MINING_FORTUNE?: number
			WALK_SPEED?: number
			MAGIC_FIND?: number
			INTELLIGENCE?: number
			WEAPON_ABILITY_DAMAGE?: number
			CRITICAL_DAMAGE?: number
			CRITICAL_CHANCE?: number
			SEA_CREATURE_CHANCE?: number
			FEROCITY?: number
			BREAKING_POWER?: number
			MINING_SPEED?: number
			PET_LUCK?: number
			ABILITY_DAMAGE_PERCENT?: number
			TRUE_DEFENSE?: number
			ATTACK_SPEED?: number
		}
		ability_damage_scaling?: number
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
		upgrade_costs?: (
			| {
					essence_type: EssenceType
					amount: number
			  }
			| {
					item_id: string
					amount: number
			  }
		)[][]
		prestige?: {
			/** An item id like BURNING_AURORA_LEGGINGS. */
			item_id: string
			costs: (
				| {
						essence_type: EssenceType
						amount: number
				  }
				| {
						item_id: string
						amount: number
				  }
			)[]
		}
		gemstone_slots?: {
			slot_type: GemstoneType | 'UNIVERSAL' | 'MINING' | 'COMBAT' | 'DEFENSIVE' | 'OFFENSIVE'
			costs?: (
				| {
						coins: number
				  }
				| {
						item_id:
							| `FINE_${GemstoneType}_GEM`
							| `FLAWLESS_${GemstoneType}_GEM`
							| 'GEMSTONE_CHAMBER'
						amount: number
				  }
			)[]
		}[]
		essence?: {
			essence_type: string
			costs: number[]
		}
		/** I don't know why this is its own field, this can be used as a fallback if requirements.dungeon is missing. */
		catacombs_requirements?: {
			dungeon: {
				type: 'CATACOMBS'
				level: number
			}
		}
		tiered_stats?: {
			DAMAGE?: number[]
			STRENGTH?: number[]
			DEFENSE?: number[]
			HEALTH?: number[]
			MINING_FORTUNE?: number[]
			WALK_SPEED?: number[]
			MAGIC_FIND?: number[]
			INTELLIGENCE?: number[]
			WEAPON_ABILITY_DAMAGE?: number[]
			CRITICAL_DAMAGE?: number[]
			CRITICAL_CHANCE?: number[]
			SEA_CREATURE_CHANCE?: number[]
			FEROCITY?: number[]
			BREAKING_POWER?: number[]
			MINING_SPEED?: number[]
			PET_LUCK?: number[]
			ABILITY_DAMAGE_PERCENT?: number[]
			TRUE_DEFENSE?: number[]
			ATTACK_SPEED?: number[]
		}
		requirements?: {
			/**
			 * If present, you need a specific level in a dungeon. Note that
			 * sometimes `catacombs_requirements` is used instead of this field.
			 */
			dungeon?: {
				type: 'CATACOMBS'
				level: number
			}
			dungeon_completion?: {
				type: 'CATACOMBS'
				tier: number
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
			skill?: {
				/** A skill id in all caps, like "FISHING". */
				type: string
				level: number
			}
			trophy_fishing_reward?: {
				reward: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND'
			}
			heart_of_the_mountain?: {
				tier: number
			}
			collection?: {
				/** A collection id, in all caps. */
				collection_id: string
				required_tier: number
			}
			target_practice?: {
				mode: 'I' | 'II' | 'III'
			}
		}
		dungeon_item?: boolean
		/**
		 * If this is 'COOP', that means the item cannot be transferred to
		 * anyone outside the coop. If it's `SOLO`, it can't even be given to
		 * anyone in the coop.
		 */
		soulbound?: 'COOP' | 'SOLO'
		salvage?: {
			item_id: string
			amount: number
		}
		/**
		 * Whether the item can be put on display in the museum.
		 * https://hypixel-skyblock.fandom.com/wiki/Museum
		 */
		museum?: true
		gear_score?: number
		/**
		 * If this is present that means the item is an island spawner, its
		 * value is the uppercase id of it like `MINING_FOREST`. Note that this
		 * is *not* the same as the `id` field, for example in this case the
		 * `id` is `ROOFED_FOREST_ISLAND`.
		 * */
		private_island?: string
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
