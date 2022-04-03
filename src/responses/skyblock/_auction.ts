import { Inventory, ITEM_RARITY } from './_item'

export interface Auction {
	/**
	 * The ObjectID of the auction. You probably want the `uuid` instead of
	 * this.
	 */
	_id: string
	/** The unique identifier for the auction. */
	uuid: string
	/** The UUID of the person who started the auction. */
	auctioneer: string
	/** The profile UUID of the person who started the auction. */
	profile_id: string
	/**
	 * The UUIDs of the people in the same co-op as the creator of the
	 * auction, including the creator of the auction.
	 */
	coop: string[]
	/** The UNIX timestamp of when the auction started */
	start: number
	/** The UNIX timestamp of when the auction ended. */
	end: number
	/** The name of the item that's being auctioned. This does not include any color codes. */
	item_name: string
	/** The lore of the item. This has color codes. */
	item_lore: string
	/**
	 * The name of the item combined with the name of the Minecraft item.
	 * For example: `Itchy Piggy Bank Skull Item`.
	 */
	extra: string
	/**
	 * The category of the item. These are the same categories that are
	 * used to sort in the auction house GUI.
	*/
	category: 'weapon' | 'accessories' | 'misc' | 'blocks' | 'consumables' | 'armor'
	/** The rarity of the item. */
	tier: ITEM_RARITY
	/**
	 * What the initial starting price set by the creator was. This is also
	 * used as the price for BIN auctions.
	 */
	starting_bid: number
	/** The Gzipped and NBT-encoded data of the item */
	item_bytes: Inventory
	claimed: boolean
	claimed_bidders: string[]
	/**
	 * Whether the auction can be bought instantly by paying the
	 * `starting_bid`. If this isn't present it should be assumed to be
	 * false.
	 */
	bin?: boolean
	/** The final bid on the item. */
	highest_bid_amount: number
	bids: {
		/** The UUID of the auction that was bid on. */
		auction_id: string
		/** The UUID of the person who made this bid. */
		bidder: string
		/** The UUID of the bidder's profile. This seems to only be present if it's a Co-op. */
		profile_id?: string
		/** The number of coins that was bid. */
		amount: number
		/** The UNIX timestamp of when the bid was made. */
		timestamp: number
	}[]
}