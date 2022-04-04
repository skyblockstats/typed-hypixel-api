export interface CurrentPlayerCountsResponse {
	success: true
	/** The total number of players online on main (i.e. not alpha) Hypixel network. */
	playerCount: number
	games: {
		[id: string]: {
			/** The number of players online in this game. */
			players: number
			/** The number of players online for each mode in the game. */
			modes?: {
				[id: string]: number
			}
		}
	}
}
