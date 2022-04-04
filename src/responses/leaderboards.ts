export interface LeaderboardsResponse {
	success: true
	/** The key is the game id, for example `GINGERBREAD`, `BEDWARS`. */
	leaderboards: {
		[id: string]: {
			path: string
			prefix: string
			title: string
			/** The in-game coordinates where the leaderboard is shown. */
			location: `${number},${number},${number}`
			/** The number of players on the leaderboard, 0-indexed */
			count: number
			/** An array of dashed UUIDs that represent the top players. */
			leaders: string[]
		}[]
	}
}
