export interface PlayerDataResponse {
    success: true
    player: {
        _id: string
        achievementsOneTime: string[]
        displayname: string
        firstLogin: string
        knownAliases: string[]
        knownAliasesLower: string[]
        lastLogin: number
        networkExp: number
        playername: string
        stats: Record<string, any> & {
            SkyBlock?: {
                profiles: Record<string, {
                    profile_id: string,
                    cute_name: string
                }>
            }
        }
        timePlaying: number
        uuid: string
        eugene: {
            dailyTwoKExp: number
        }
        quests: Record<string, any>
        vanityFavorites?: string
        currentEmote?: string
        achievements: Record<string, number>
        housingMeta: Record<string, any>
        voting: Record<string, number>
        mcVersionRp: string
        karma: number
        petConsumables: Record<string, number>,
        [key: `levelingReward_${number}`]: boolean
        vanityMeta: {
            packages: string[]
        }
        parkourCompletions: Record<string, {
            timeStart: number
            timeTook: number
        }[]>
        lastAdsenseGenerateTime: number
        lastLogout: number
        friendRequestsUuid: any[]
        channel?: 'ALL'
        newPackageRank?: 'MVP_PLUS'
        [key: `levelup_${string}`]: number
        currentPet?: string
        network_update_book: number
        totalRewards: number
        totalDailyRewards: number
        rewardStreak: number
        rewardScore: number
        rewardHighScore: number
        petStats?: Record<string, any>
        achievementRewardsNew: Record<`for_points_${number}00`, number>
        achievementTracking: any[]
        adsense_tokens?: number
        socialMedia?: {
            prompt: boolean
            YOUTUBE: string
            links: {
                DISCORD: string
                HYPIXEL: string
            }
        }
        guildNotifications?: boolean
        challenges: Record<string, Record<string, number>>
        spec_always_flying?: boolean
        userLanguage: string
        achievementSync: Record<string, number>
        parkourCheckpointBests: Record<string, number[]>
        achievementPoints: number
        monthlycrates: Record<`${number}-${number}`, Record<string, boolean>>
        tourney?: Record<string, number | Record<string, { games_played: number }>>
        gifts_grinch?: number
        snowball_fight_intro_2019?: number
        achievementTotem?: any
        main2017Tutorial?: boolean
        [key: `levelUp_${string}`]: number
        rankPlusColor?: string
        questSettings?: {
            autoActivate: boolean
        }
        claimed_potato_talisman?: number
        skyblock_free_cookie?: number
        [key: `adventRewards${number}`]: Record<`day${number}`, number>
        claimed_year143_cake?: number
        mostRecentGameType: string
    }

}

