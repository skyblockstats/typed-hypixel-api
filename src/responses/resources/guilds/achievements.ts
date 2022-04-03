export interface GuildAchievementsResponse {
	success: true
	lastUpdated: number
	/** An empty array. There are no one-time guild achievements. */
	one_time: Record<never, never>
	/** Achievements that have different tiers to them. */
	tiered: {
		[key: string]: {
			/** The name of the achievement. */
			name: string
			/** The description of the achievement. */
			description: string
			tiers: {
				tier: number
				points: number
				amount: number
			}[]
		}
	}
}