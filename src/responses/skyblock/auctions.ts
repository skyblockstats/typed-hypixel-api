import { Auction } from './_auction'

export interface SkyBlockActiveAuctionsResponse {
	success: true
	/** The 0-indexed page that you're on. You can pass the `page` option to go to other pages. */
	page: number
	/**
	 * The total amount of pages that there are. Note that the page option is
	 * 0-indexed, so you have to subtract 1 from this to go to the last page.
	 */
	totalPages: number
	/** The total amount of active auctions. */
	totalAuctions: number
	/** The UNIX timestamp of when this page was last updated. */
	lastUpdated: number
	auctions: Auction[]
}
