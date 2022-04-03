export interface SkyBlockBazaarResponse {
	success: true
	/** The UNIX timestamp of when this page was last updated. */
	lastUpdated: number
	products: {
		[id: string]: {
			/** The Hypixel item id, for example `INK_SACK:3`, `JERRY_BOX_GREEN`. */
			product_id: string
			/** The top 30 sell orders. */
			sell_summary: {
				/** The number of items that are being sold. */
				amount: number
				/** The number of coins that each individual item is being sold for. */
				pricePerUnit: number
				/**
				 * The number of active sell orders that have the same price
				 * per unit. This probably isn't relevant if you're making
				 * calculations.
				 */
				orders: number
			}[]
			/** The top 30 buy orders. */
			buy_summary: {
				/** The amount of items that are being bought. */
				amount: number
				/** The number of coins that each individual item is being bought for. */
				pricePerUnit: number
				/**
				 * The number of active buy orders that have the same price per
				 * unit. This probably isn't relevant if you're making
				 * calculations.
				 */
				orders: number
			}[]
			/** The summary of the product, used for advanced view in-game. */
			quick_status: {
				/** The Hypixel item id, for example `INK_SACK:3`, `JERRY_BOX_GREEN`. */
				productId: string
				/** The weighted average of the top 2% sell orders by volume. */
				sellPrice: number
				/** The sum of all item amounts in all sell orders. */
				sellVolume: number
				/** The total number of items that have been sold in the past week. */
				sellMovingWeek: number
				/** The number of active sell orders. */
				sellOrders: number
				/** The weighted average of the top 2% buy orders by volume. */
				buyPrice: number
				/** The sum of all item amounts in all buy orders. */
				buyVolume: number
				/** The total number of items that have been bought in the past week. */
				buyMovingWeek: number
				/** The number of active buy orders. */
				buyOrders: number
			}
		}
	}[]
}