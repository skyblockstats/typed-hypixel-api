export interface QuestsResponse {
	success: true
	lastUpdated: number
	/**
	 * The list of all Hypixel quests, except SkyBlock ones. The keys are lowercase game/category IDs, for example `paintball`, `gingerbread`, `prototype`.
	 */
	quests: {
		/** The lowercase database names, for example `christmas2017`, `gingerbread`, `skyblock`. */
		[key: string]: {
			/** The ID of the quest. */
			id: string
			name: string
			rewards: (
				| {
						type:
							| 'MultipliedExperienceReward'
							| 'MultipliedCoinReward'
							| 'MegawallsMythicFavorReward'
							| 'ArenaMagicKeyReward'
							| 'CoinReward'
							| 'WarlordsBrokenWeaponReward'
							| 'WarlordsMagicDustReward'
							| 'WarlordsVoidShardReward'
							| 'SkyWarsSoulReward'
							| 'SkyWarsTokenReward'
							| 'GameLootChestReward'
							| 'CrazyWallsSkullReward'
							| 'SkyClashCardPackReward'
							| 'PitGold'
							| 'BedwarsExpReward'
							| 'WoolWarsWoolReward'
							| 'WoolWarsExpReward'
							| 'FestivalExperienceReward'
						amount: number
				  }
				| {
						type: 'PackageReward'
						package: string
				  }
			)[]
			objectives: ({
				id: string
			} & (
				| {
						type: 'IntegerObjective'
						integer: number
				  }
				| {
						type: 'BooleanObjective'
				  }
			))[]
			requirements: {
				type:
					| 'DailyResetQuestRequirement'
					| 'WeeklyResetQuestRequirement'
					| 'OneTimeQuestRequirement'
			}[]
			/** A description of the quest. */
			description: string
		}[]
	}
}
