export interface ChallengesResponse {
	success: true
	lastUpdated: number
	challenges: {
		[key: string]: {
			id: string
			name: string
			rewards: {
				type: 'MultipliedExperienceReward'
				amount: number
			}[]
		}[]
	}
}