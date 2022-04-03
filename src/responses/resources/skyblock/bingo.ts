export interface SkyBlockBingoResponse {
	success: true
	lastUpdated: number
	id: number
	goals: ({
		id: string
		name: string
		/** The description of the bingo item. This uses Minecraft color codes. */
		lore?: string
	} & ({
		tiers: number[]
		/** The amount that has been collected for this goal. This is only here for community goals. */
		progress: number
	} | {
		requiredAmount?: number
	}))[]
}