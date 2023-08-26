import { SkyBlockSlayerBosses } from '../../skyblock/_profile_member'

interface MainItemStats {
	DAMAGE?: number
	damage?: number

	STRENGTH?: number
	strength?: number

	DEFENSE?: number
	defense?: number

	HEALTH?: number
	health?: number

	MINING_FORTUNE?: number
	mining_fortune?: number

	WALK_SPEED?: number
	walk_speed?: number

	MAGIC_FIND?: number
	magic_find?: number

	INTELLIGENCE?: number
	intelligence?: number

	WEAPON_ABILITY_DAMAGE?: number
	weapon_ability_damage?: number

	CRITICAL_DAMAGE?: number
	critical_damage?: number

	CRITICAL_CHANCE?: number
	critical_chance?: number

	SEA_CREATURE_CHANCE?: number
	sea_creature_chance?: number

	FEROCITY?: number
	ferocity?: number

	BREAKING_POWER?: number
	breaking_power?: number

	MINING_SPEED?: number
	mining_speed?: number

	PET_LUCK?: number
	pet_luck?: number

	ABILITY_DAMAGE_PERCENT?: number
	ability_damage_percent?: number

	TRUE_DEFENSE?: number
	true_defense?: number

	ATTACK_SPEED?: number
	attack_speed?: number

	FARMING_FORTUNE?: number
	farming_fortune?: number

	MENDING?: number
	mending?: number

	VITALITY?: number
	vitality?: number

	FISHING_SPEED?: number
	fishing_speed?: number

	HEALTH_REGENERATION?: number
	health_regeneration?: number

	FISHING_WISDOM?: number
	fishing_wisdom?: number

	COMBAT_WISDOM?: number
	combat_wisdom?: number

	FORAGING_WISDOM?: number
	foraging_wisdom?: number

	FARMING_WISDOM?: number
	farming_wisdom?: number

	MANA_REGEN?: number
	mana_regen?: number
}

interface RiftItemStats {
	RIFT_DAMAGE?: number
	rift_damage?: number

	RIFT_STRENGTH?: number
	rift_strength?: number

	RIFT_DEFENCE?: number
	rift_defense?: number

	RIFT_HEALTH?: number
	rift_health?: number

	RIFT_MINING_FORTUNE?: number
	rift_mining_fortune?: number

	RIFT_WALK_SPEED?: number
	rift_walk_speed?: number

	RIFT_MAGIC_FIND?: number
	rift_magic_find?: number

	RIFT_INTELLIGENCE?: number
	rift_intelligence?: number

	RIFT_WEAPON_ABILITY_DAMAGE?: number
	rift_weapon_ability_damage?: number

	RIFT_CRITICAL_DAMAGE?: number
	rift_critical_damage?: number

	RIFT_CRITICAL_CHANCE?: number
	rift_critical_chance?: number

	RIFT_SEA_CREATURE_CHANCE?: number
	rift_sea_creature_chance?: number

	RIFT_FEROCITY?: number
	rift_ferocity?: number

	RIFT_BREAKING_POWER?: number
	rift_breaking_power?: number

	RIFT_MINGING_SPEED?: number
	rift_mining_speed?: number

	RIFT_PET_LUCK?: number
	rift_pet_luck?: number

	RIFT_ABILITY_DAMAGE_PERCENT?: number
	rift_ability_damage_percent?: number

	RIFT_TRUE_DEFENSE?: number
	rift_true_defense?: number

	RIFT_ATTACK_SPEED?: number
	rift_attack_speed?: number

	RIFT_TIME?: number
	rift_time?: number
	// Hypixel spelling error
	rift_Time?: number

	RIFT_FARMING_FORTUNE?: number
	rift_farming_fortune?: number

	RIFT_MENDING?: number
	rift_mending?: number

	RIFT_VITALITY?: number
	rift_vitality?: number

	RIFT_FISHING_SPEED?: number
	rift_fishing_speed?: number

	RIFT_HEALTH_REGENERATION?: number
	rift_health_regeneration?: number

	RIFT_FISHING_WISDOM?: number
	rift_fishing_wisdom?: number

	RIFT_COMBAT_WISDOM?: number
	rift_combat_wisdom?: number

	RIFT_FORAGING_WISDOM?: number
	rift_foraging_wisdom?: number

	RIFT_FARMING_WISDOM?: number
	rift_farming_wisdom?: number

	RIFT_MANA_REGEN?: number
	rift_mana_regen?: number
}

type ItemStats = MainItemStats & RiftItemStats

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

type TieredStats =
	| 'DAMAGE'
	| 'STRENGTH'
	| 'DEFENSE'
	| 'HEALTH'
	| 'MINING_FORTUNE'
	| 'WALK_SPEED'
	| 'MAGIC_FIND'
	| 'INTELLIGENCE'
	| 'WEAPON_ABILITY_DAMAGE'
	| 'CRITICAL_DAMAGE'
	| 'CRITICAL_CHANCE'
	| 'SEA_CREATURE_CHANCE'
	| 'FEROCITY'
	| 'BREAKING_POWER'
	| 'MINING_SPEED'
	| 'PET_LUCK'
	| 'ABILITY_DAMAGE_PERCENT'
	| 'TRUE_DEFENSE'
	| 'ATTACK_SPEED'

export interface SkyBlockItemsResponse {
	success: true
	lastUpdated: number
	items: ({
		material: string
		/** Base64 encoded skin data. */
		skin?: string
		/** Format: "R,G,B" */
		color?: string
		lose_motes_value_on_transfer?: boolean
		/** A record of enchantment ids like `counter_strike` to their default level. */
		enchantments?: Record<string, number>
		durability?: number
		item_durability?: -1
		name: string
		glowing?: boolean
		furniture?: string
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
			| 'WINTER_ISLAND'
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
					type: 'ESSENCE'
					essence_type: EssenceType
					amount: number
			  }
			| {
					type: 'ITEM'
					item_id: string
					amount: number
			  }
		)[]
		/**
		 * Make sure to normalize the case for these, since older items have
		 * them uppercase and newer items have them lowercase.
		 */
		stats?: ItemStats
		origin?: string
		ability_damage_scaling?: number
		/**
		 * The number of coins that the player gets from selling the item to
		 * an NPC.
		 */
		npc_sell_price?: number
		hide_from_viewrecipe_command?: true
		motes_sell_price?: number
		/**
		 * The item that this item will give you if you right click it. Seems to be currently only used for eccentric paintings.
		 */
		item_specific?: Record<string, any> // Too complicated to keep track of every single item that requires 'item_specific' stats.

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
					type: 'ESSENCE'
					essence_type: EssenceType
					amount: number
			  }
			| {
					type: 'ITEM'
					item_id: string
					amount: number
			  }
		)[][]
		prestige?: {
			/** An item id like BURNING_AURORA_LEGGINGS. */
			item_id: string
			costs: (
				| {
						type: 'ESSENCE'
						essence_type: EssenceType
						amount: number
				  }
				| {
						type: 'ITEM'
						item_id: string
						amount: number
				  }
			)[]
		}
		gemstone_slots?: {
			slot_type: GemstoneType | 'UNIVERSAL' | 'MINING' | 'COMBAT' | 'DEFENSIVE' | 'OFFENSIVE'
			costs?: (
				| {
						type: 'COINS'
						coins: number
				  }
				| {
						type: 'ITEM'
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
			type: 'DUNGEON_SKILL'
			dungeon_type: 'CATACOMBS'
			level: number
		}[]
		tiered_stats?: Partial<Record<TieredStats, number[]>>
		requirements?: /**
		 * If present, you need a specific level in a dungeon. Note that
		 * sometimes `catacombs_requirements` is used instead of this field.
		 */
		(
			| {
					type: 'DUNGEON_SKILL'
					dungeon_type: 'CATACOMBS'
					level: number
			  }
			| {
					type: 'DUNGEON_TIER'
					dungeon_type: 'CATACOMBS' | 'MASTER_CATACOMBS'
					tier: number
			  }
			/**
			 * If present, a reputation with one of the factions from
			 * the nether is required.
			 */
			| {
					type: 'CRIMSON_ISLE_REPUTATION'
					faction: 'BARBARIANS' | 'MAGES'
					/** The number of reputation needed to meet this requirement. */
					reputation: number
			  }
			/** If present, a specific slayer boss level is required. */
			| {
					type: 'SLAYER'
					slayer_boss_type: SkyBlockSlayerBosses
					level: number
			  }
			| {
					type: 'SKILL'
					/** A skill id in all caps, like "FISHING". */
					skill: string
					level: number
			  }
			| {
					type: 'TROPHY_FISHING'
					reward: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND'
			  }
			| {
					type: 'HEART_OF_THE_MOUNTAIN'
					tier: number
			  }
			| {
					type: 'COLLECTION'
					/** A collection id, in all caps. */
					collection: string
					tier: number
			  }
			| {
					type: 'TARGET_PRACTICE'
					mode: 'I' | 'II' | 'III'
			  }
			| {
					type: 'MELODY_HAIR'
			  }
			| {
					type: 'GARDEN_LEVEL'
					level: number
			  }
			| {
					type: 'PROFILE_AGE'
					minimum_age_unit: string
					minimum_age: number
			  }
		)[]
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
		rift_transferrable?: true
		cannot_reforge?: true
		gear_score?: number
		/**
		 * If this is present that means the item is an island spawner, its
		 * value is the uppercase id of it like `MINING_FOREST`. Note that this
		 * is *not* the same as the `id` field, for example in this case the
		 * `id` is `ROOFED_FOREST_ISLAND`.
		 * */
		private_island?: string
		id: string
	} & ({ category?: 'SWORD'; sword_type: string } | { category?: string }) &
		(
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
