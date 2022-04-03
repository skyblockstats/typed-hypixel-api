export interface SkyBlockPlayerBingoResponse {
	success: true
	events: {
		key: number
		points: number
		completed_goals: string[]
	}[]
}