export interface GuildResponse {
	success: true
	guild: {
		/** The MongoDB ObjectId of the guild. This can be used to fetch the guild. */
		_id: string
		/** The display name of the guild */
		name: string
		/**
		 * The display name of the guild, but with all letters lowercased.
		 */
		name_lower: string
		coins: number
		coinsEver: number
		/**
		 * The UNIX timestamp of when the guild was created.
		 */
		created: number
		members: {
			uuid: string
			/** The custom guild rank name of the member */
			rank: string
			/** The UNIX timestamp of when the member joined the guild */
			joined: number
			questParticipation?: number
			/** The UNIX timestamp at which the member will be unmuted. If this is before the current time, the member has already been unmuted. */
			mutedTill?: number
			/** A record of YYYY-MM-DD to amount of XP gained in the past week. */
			expHistory: Record<`${number}-${number}-${number}`, number>
		}[]
		/** The custom ranks in the guild. */
		ranks: {
			/** The display name of the rank. */
			name: string
			default: boolean
			/** The short two letter uppercase tag of the rank */
			tag: string | null
			/** The UNIX timestamp of when the rank was created. */
			created: number
			/** How up in the hierarchy the rank is, with 1 being the highest. */
			priority: number
		}[]
		achievements: {
			EXPERIENCE_KINGS: number
			ONLINE_PLAYERS: number
			WINNERS: number
		}
		exp: number
		/** The short uppercase tag of the guild */
		tag: string
		/** A list of game ids */
		preferredGames: string[]
		/** The color name of the tag, like DARK_AQUA */
		tagColor: string
		publiclyListed: boolean
		description: string
		/** A UNIX timestamp */
		chatMute: number
		/** a record of game ids to the amount of xp that the guild has earned in them */
		guildExpByGameType: Record<string, number>
	}
}
