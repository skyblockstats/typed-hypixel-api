export interface SkyBlockCollectionsResponse {
	success: true
	lastUpdated: number
	version: string
	collections: {
		[key: string]: {
			name: string
			items: {
				[key: string]: {
					name: string
					maxTiers: number
					tiers: {
						tier: number
						amountRequired: number
						unlocks: string[]
					}[]
				}
			}
		}
	}
}