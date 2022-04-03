import { Auction } from './_auction'

export interface SkyBlockRequestAuctionResponse {
	success: true
	auctions: Auction[]
}