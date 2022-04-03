export interface SkyBlockRecentlyEndedAuctionsResponse {
	success: true
	/** The UNIX timestamp of when this page was last updated. */
	lastUpdated: number
	auctions: {
		auction_id: string
		seller: string
		seller_profile: string
		buyer: string
		timestamp: number
		price: number
		bin: boolean
		/** Base64-encoded gzipped NBT-encoded item data. */
		item_bytes: string
	}[]
}