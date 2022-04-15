export interface ApiKeyInformationResponse {
	success: true
	record: {
		key: string
		owner: string
		limit: number
		queriesInPastMin: number
		totalQueries: number
	}
}
