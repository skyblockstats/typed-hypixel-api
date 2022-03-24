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
		}
		npc_sell_price?: number
		essence: {
			essence_type: string
			costs: nummber[]
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
			dungeon: {
				type: string
				level: number
			}
		}
		dungeon_item?: boolean
		museum?: string
		id: string
	} & ({
		generator: string
		generator_tier: number
	}?) & ({
		material: 'SKULL_ITEM'
		skin: string
	}?) & ({
		material: 'LEATHER_CHESTPLATE'
		color: `${number},${number},${number}`
	}?))[]
}