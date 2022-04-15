export interface GamesInformationResponse {
	success: true
	lastUpdated: number
	games: {
		/** The ID of the game or mode, for example `SKYBLOCK`, `GINGERBREAD`, `DUELS`. */
		[key: string]: {
			/**
			 * A record of mode IDs to display names. The IDs may or may not be
			 * capitalized, but they will be snake cased.
			 */
			modeNames?: Record<string, string>
			/**
			 * Whether the game is in the classic games lobby. Note that not
			 * all classic games have the legacy field.
			 */
			legacy?: true
			/** The display name of the game in the database */
			databaseName: string
			/** The actual correct display name of the game */
			name: string
			/** The numeric id of the game */
			id: number
			/** Whether the game no longer exists */
			retired?: boolean
		}
	}
}
