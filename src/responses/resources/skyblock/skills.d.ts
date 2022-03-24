export interface SkyBlockSkillsResponse {
	success: true
	lastUpdated: number
	version: string
	collections: {
		[key: string]: {
			name: string
			description: string
			maxLevel: number
			levels: {
				level: number
				totalExpRequired: number
				unlocks: string[]
			}[]
		}
	}
	skills: {
		[key: string]: {
			name: string
			description: string
			maxLevel: number
			levels: {
				level: number
				totalExpRequired: number
				unlocks: string[]
			}[]
		}
	}
}