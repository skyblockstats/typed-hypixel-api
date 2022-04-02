export interface Tourneys {
    // we have to do this because typescript literals are greedy and games with underscores would fail
    [key: `${string}_${number}` | `${string}_${string}_${number}` | `${string}_${string}_${string}_${number}`]: {
        games_played?: number
        playtime?: number
        tributes_earned?: number
        first_win?: number
        first_game?: number
        claimed_ranking_reward?: number
        seenRPbook?: boolean
    }
    first_join_lobby?: number
    total_tributes?: number
    shop_sort?: 'oldest'
    hide_purchased?: boolean
}

export interface PlayerDataResponse {
    success: true
    player: {
        /**
         * The database ObjectId of the player. This isn't used for anything,
         * you probably want to use the `uuid` field instead.
         */
        _id: string
        achievementsOneTime: string[]
        clock?: boolean
        displayname: string
        eulaCoins?: boolean
        firstLogin: number
        friendRequests?: string[]
        knownAliases: string[]
        knownAliasesLower: string[]
        lastLogin?: number
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
        testPass?: boolean
        mostRecentlyTippedUuid?: string
        vanityFavorites?: string
        currentEmote?: string
        achievements: Record<string, number>
        transformation?: string
        housingMeta: Record<string, any>
        voting: Record<string, number>
        mcVersionRp: string
        rewardConsumed?: boolean
        vanityConvertedBoxToday?: number
        vanityFirstConvertedBox?: number
        [key: `${string}Cooldowns`]: Record<string, boolean>
        cooldowns?: Record<string, Record<string, number>>
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
        lastClaimedReward?: number
        lastLogout?: number
        friendRequestsUuid: any[]
        channel?: 'ALL' | 'PM'

        collectibles_menu_sort?: string
        onetime_achievement_menu_sort_completion_sort?: string
        easter2021Cooldowns2?: Record<string, boolean>
        anniversaryNPCVisited2021?: number[]
        anniversaryNPCProgress2021?: number

        packageRank?: string
        newPackageRank?: string
        monthlyPackageRank?: 'NONE' | string
        mostRecentMonthlyPackageRank?: 'SUPERSTAR' | undefined
        rank?: string
        prefix?: string

        [key: `levelup_${string}`]: number
        currentPet?: string
        petJourneyTimestamp?: number
        network_update_book: string
        totalRewards: number
        totalDailyRewards: number
        rewardStreak: number
        rewardScore: number
        rewardHighScore: number
        petStats?: Record<string, any>
        achievementRewardsNew: Record<`for_points_${number}00`, number>
        onetime_achievement_menu_sort?: string
        achievementTracking: any[]
        adsense_tokens?: number
        language?: string
        flashingSalePopup?: number
        flashingSalePoppedUp?: number
        flashingSaleOpens?: number
        flashingSaleClicks?: number
        giftingMeta?: {
            realBundlesReceived: 197,
            bundlesReceived: 197,
            giftsGiven: 629,
            bundlesGiven: 127,
            realBundlesGiven: 127,
            milestones: string[]
        }
        fortuneBuff?: number
        SANTA_QUEST_STARTED?: boolean
        SANTA_FINISHED?: boolean
        socialMedia?: {
            prompt: boolean
            links: {
                DISCORD?: string
                HYPIXEL?: string
                TWITCH?: string
                TWITTER?: string
                /**
                 * Make sure to also check socialMedia.YOUTUBE
                 */
                YOUTUBE?: string
                INSTAGRAM?: string
            }
            /**
             * This was replaced with links.YOUTUBE, but this field is sometimes still used
            */
            YOUTUBE: string
            /**
             * This was replaced with links.TWITTER, but this field is sometimes still used
            */
            TWITTER: string
            /**
             * This was replaced with links.DISCORD, but this field is sometimes still used
            */
            DISCORD: string

        }
        guildNotifications?: boolean
        challenges: Record<string, Record<string, number>>
        spec_always_flying?: boolean
        userLanguage: string
        monthlyRankColor?: 'AQUA'
        achievementSync: Record<string, number>
        tiered_achievement_menu_sort?: string
        parkourCheckpointBests: Record<string, Record<number, number>>
        achievementPoints: number
        battlePassGlowStatus?: boolean
        monthlycrates: Record<`${number}-${number}`, Record<string, boolean>>
        tourney?: Tourneys
        gifts_grinch?: number
        snowball_fight_intro_2019?: boolean
        achievementTotem?: any
        main2017Tutorial?: boolean
        [key: `levelUp_${string}`]: number
        rankPlusColor?: string
        questSettings?: {
            autoActivate: boolean
        }
        claimed_potato_talisman?: number
        skyblock_free_cookie?: number
        [key: `scorpius_bribe_${number}`]: number
        disabledProjectileTrails?: boolean
        currentClickEffect?: string
        seasonal?: Record<string, Record<number, {
            adventRewards?: Record<`day${number}`, number>
            presents?: Record<string, true>
        }>>
        [key: `completed_christmas_quests_${number}`]: number
        currentGadget?: string
        claimed_century_cake?: number
        [key: `adventRewards${number}` | `adventRewards_v2_${number}`]: Record<`day${number}`, number>
        claimed_year143_cake?: number
        mostRecentGameType?: string
    }

}

