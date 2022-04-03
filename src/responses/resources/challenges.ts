export interface ChallengesResponse {
	success: true
	lastUpdated: number
	/**
	 * The list of all Hypixel achievements. The keys are lowercase game/category IDs, for example `christmas2017`, `gingerbread`, `skyblock`.
	 */
	achievements: {
		/** The lowercase database names, for example `christmas2017`, `gingerbread`, `skyblock`. */
		[key: string]: {
			/** Achievements that can only be unlocked once. */
			one_time: {
				[key: string]: {
					points: number
					/** The name of the achievement. */
					name: string
					/** The description of the achievement. */
					description: string
					/** The percentage of people who've played the game who have unlocked the achievement. This is a decimal between 0 and 100. */
					gamePercentUnlocked: number
					/** The percentage of people who've unlocked the achievement. This is a decimal between 0 and 100. */
					globalPercentUnlocked: number
				}
			}
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
			total_points: number
			total_legacy_points: number
		}
	}
}