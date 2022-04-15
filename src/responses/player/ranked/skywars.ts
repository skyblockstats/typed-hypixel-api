export interface RankedSkywarsResponse {
	success: true
	result: {
		/** MM_YY, I think */
		key: `${number}_${number}`
		/** The leaderboard position the player is in */
		position: number
		/** The player's ranked SkyWars score */
		score: number
	}
}
