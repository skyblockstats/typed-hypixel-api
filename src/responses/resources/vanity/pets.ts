export interface VanityPetsResponse {
	success: true
	lastUpdated: number
	types: {
		key: string
		name: string
		rarity: string | null
		package: `pet_${string}`
	}[]
	rarities: {
		name: string
		color: string
	}[]
}
