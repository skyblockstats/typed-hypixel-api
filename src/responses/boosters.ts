/** This endpoint seems to be broken, since it shows some very old boosters. */
export interface BoostersResponse {
	success: true
	boosters: {
		/** The ObjectID of the booster. This can't really be used for anything. */
		_id: string
		/** The Minecraft UUID of the person who activated the booster. */
		purchaserUuid: string
		/** The multiplier. */
		amount: number
		/** How long the booster initially lasted, in seconds. */
		originalLength: number
		/** The number of seconds remaining in the booster. */
		length: number
		/** The numeric ID of the game that the booster is for. */
		gameType: number
		/** UNIX timestamp of when the booster was activated. */
		dateActivated: number
		/** If it's an array, it contains up to 10 UUIDs who have stacked the booster. */
		stacked?: true | string[]
	}[]
	boosterState: {
		/** Whether the booster duration is counting down. */
		decrementing: boolean
	}
}