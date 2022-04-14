import { ITEM_RARITY } from './skyblock/_item'
import { DatabaseLastSavedVersion, DatabaseSkyBlockProfileMember, SkyBlockProfileMember } from './skyblock/_profile_member'

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
    shop_sort?: 'oldest' | 'highest_cost'
    hide_purchased?: boolean
}

interface SimpleSkyBlockProfilesRecord {
    [key: string]: {
        profile_id: string,
        cute_name: string
    }
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
        /** The username of the player that Hypixel has cached. */
        displayname: string
        eulaCoins?: boolean
        fireworkStorage?: {
            flight_duration: number,
            shape: string,
            trail: true,
            twinkle: true,
            colors: string,
            fade_colors: string,
            selected: boolean
        }[]
        /** The UNIX timestamp at which the player first joined Hypixel. */
        firstLogin: number
        friendRequests?: string[]
        knownAliases: string[]
        knownAliasesLower: string[]
        /**
         * A number that is supposed to represent the Minecraft version the
         * player last logged on with. This seems to be deprecated as it only
         * appears on some old profiles, use `mcVersionRp` instead.
         */
        mostRecentMinecraftVersion?: number

        /** A username. */
        mostRecentlyThanked?: string
        mostRecentlyThankedUuid?: string

        /** A username. */
        mostRecentlyTipped?: string
        mostRecentlyTippedUuid?: string

        lastLogin?: number
        networkExp: number
        notifications?: boolean
        playername: string
        seeRequests?: boolean
        stats: Record<string, any> & {
            SkyBlock?: {
                profiles: SimpleSkyBlockProfilesRecord
            }
        }
        /**
         * This field contains the raw `stats`, with no API filtering so you
         * can see all the secret fields Hypixel stores. However, it seems to
         * only appear in Minikloon's data so it can't be used for anything too fun.
        */
        s?: Record<string, any> & {
            /**
             * Information about the player's SkyBlock profiles directly
             * sourced from the database. This seems to only appear in
             * Minikloon's data, however, so it can't be used for anything too
             * fun.
             * */
            SkyBlock?: {
                account: {
                    /** The UUID of the player's active profile. */
                    selected_profile: string
                    last_save: number
                    /** A string like `skyblock_zback_v0.7.0`. */
                    backed_up_collection: string
                    lastSaveVersion: DatabaseLastSavedVersion
                    /** This is different and older than last_save. Why? No clue. */
                    lastSaveTimestamp: number
                    skyblock_exp: number

                    migrated_to_v2: true
                    migrated_to_v3: true
                    migrated_to_v4: true

                    collected_cake_years: number[]
                    winter_gifts_collected_37: number[]
                }
                profiles: Record<string, DatabaseSkyBlockProfileMember>
                /**
                 * An array that contains some of the things the player has done.
                 */
                packages: (
                    `visited_${string}`
                    | `unlocked_collection_${string}`
                    | `crafted_minion_${string}_${number}`
                    // this is necessary because typescript
                    | `crafted_minion_${string}_${string}_${number}`
                    | `summer_reward_bundle_${string}`
                )[]
                joined_version: string
                latestUpdateSeen: string
                itemDetectorAlerts: number
                idtoken: number
                achievement_magma_cream_consumed: number

                setting_profile_viewer: boolean
                setting_guest_invites: boolean
                setting_coop_invites: boolean
                setting_double_tap_to_drop: boolean
                setting_api_skills: boolean
                setting_api_collections: boolean
                setting_api_inventory: boolean
                setting_play_music: boolean
                setting_pickup_rarity_filter: ITEM_RARITY
                setting_hide_friend_pets: boolean

                profiles_v2: SimpleSkyBlockProfilesRecord
                profiles_v3: SimpleSkyBlockProfilesRecord
                profiles_v4: SimpleSkyBlockProfilesRecord
            }
        }

        timePlaying?: number
        tournamentTokens?: number

        /** The undashed Minecraft UUID of the player. */
        uuid: string
        wardrobe?: string
        /** The delivery man. */
        eugene?: {
            dailyTwoKExp: number
        }
        quests?: Record<string, any>
        testPass?: boolean

        thanksReceived?: number
        thanksSent?: number

        vanityFavorites?: string
        currentEmote?: string
        achievements: Record<string, number>
        transformation?: string
        housingMeta: Record<string, any>
        voting: Record<string, number>
        /**
         * The version string of the Minecraft version the player last logged
         * onto Hypixel with, for example 1.16.3. Note that this is not
         * entirely accurate; sometimes it returns the wrong Minecraft
         * version for some players and sometimes it's not present at all.
         */
        mcVersionRp?: string
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
        gadget?: string
        auto_spawn_pet?: boolean
        channel?: 'ALL' | 'PM' | 'PARTY'
        chat?: boolean
        disguise?: string
        collectibles_menu_sort?: string
        onetime_achievement_menu_sort_completion_sort?: string
        [key: `easter${number}Cooldowns2`]: Record<string, boolean>
        [key: `anniversaryNPCVisited${number}`]: number[]
        [key: `anniversaryNPCProgress${number}`]: number

        packageRank?: string
        newPackageRank?: string
        monthlyPackageRank?: 'NONE' | string
        mostRecentMonthlyPackageRank?: 'SUPERSTAR' | undefined
        rank?: string
        prefix?: string

        [key: `levelup_${string}`]: number
        currentPet?: string
        petJourneyTimestamp?: number
        network_update_book?: string
        totalRewards?: number
        totalDailyRewards?: number
        rewardStreak?: number
        rewardScore?: number
        rewardHighScore?: number
        petStats?: Record<string, any>
        achievementRewardsNew?: Record<`for_points_${number}00`, number>
        onetime_achievement_menu_sort?: string
        achievementTracking: any[]
        adsense_tokens?: number
        language?: string
        flashingSalePopup?: number
        flashingSalePoppedUp?: number
        flashingSaleOpens?: number
        flashingSaleClicks?: number
        giftingMeta?: {
            realBundlesReceivedInc?: number
            realBundlesReceived: number
            bundlesReceived: number

            realBundlesGiven?: number
            bundlesGiven?: number
            giftsGiven?: number
            ranksGiven?: number

            milestones?: string[]
            rankgiftingmilestones?: string[]
        }
        fortuneBuff?: number
        SANTA_QUEST_STARTED?: boolean
        SANTA_FINISHED?: boolean
        compassStats?: {
            compass: {
                battleground: number
                arcade: number
                prototype: number
                skywars: number
                tntgames: number
            }
        },
        socialMedia?: {
            prompt?: boolean
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
            YOUTUBE?: string
            /**
             * This was replaced with links.TWITTER, but this field is sometimes still used
            */
            TWITTER?: string
            /**
             * This was replaced with links.DISCORD, but this field is sometimes still used
            */
            DISCORD?: string

        }
        disableTipMessages?: boolean
        guildNotifications?: boolean
        challenges: Record<string, Record<string, number>>
        spec_always_flying?: boolean
        userLanguage?: string
        monthlyRankColor?: 'AQUA'
        achievementSync: Record<string, number>
        tiered_achievement_menu_sort?: string
        parkourCheckpointBests: Record<string, Record<number, number>>
        achievementPoints: number
        battlePassGlowStatus?: boolean
        lastMapVote?: number

        'dmcrates-10-2019'?: {
            REGULAR: boolean
            VIP: boolean
            VIP_PLUS: boolean
            MVP: boolean
            MVP_PLUS: boolean
        }
        monthlycrates?: Record<`${number}-${number}`, Record<string, boolean>>

        tourney?: Tourneys
        gifts_grinch?: number

        xmas2019_ARCADE_1?: boolean
        xmas2019_ARCADE_2?: boolean
        xmas2019_ARCADE_3?: boolean
        xmas2019_PTL_3?: boolean

        snowball_fight_intro_2019?: boolean
        achievementTotem?: any
        main2017Tutorial?: boolean
        [key: `levelUp_${string}`]: number
        rankPlusColor?: string
        questSettings?: {
            autoActivate: boolean
        }

        /**
         * The UNIX timestamp of when the player claimed their SkyBlock personal bank
         * for each profile. The key is formatted as
         * `claimed_solo_bank_b876ec32-e396-476b-a115-8438d83c67d4`.
         */
        [key: `claimed_solo_bank_${string}`]: number
        /**
         * I don't know what this is for, but it's formatted as
         * `claimed_coop_bank_05c9bb60-e39e-4463-82c6-d5a7fe2fa0f0`. The uuid
         * is a SkyBlock profile uuid.
         */
        [key: `claimed_coop_bank_${string}`]: number
        claimed_potato_talisman?: number
        claim_potato_war_crown?: number
        skyblock_free_cookie?: number
        claimed_potato_basket?: number
        [key: `scorpius_bribe_${number}`]: number

        disabledProjectileTrails?: boolean
        currentClickEffect?: string
        outfit?: Record<any, never>
        seasonal?: {
            christmas?: Record<number, {
                adventRewards?: Record<`day${number}`, number>
                presents?: Record<string, true>
            }>
            easter?: Record<number, {
                duelsWinsAchievement: number
                mainlobby_egghunt_reward: boolean
                [key: `mainlobby_egghunt_${number}_${number}_${number}`]: boolean
            }>
            anniversary?: Record<number, {
                anniversaryNPCVisited: number[]
                anniversaryNPCProgress: number
            }>
        }
        [key: `completed_christmas_quests_${number}`]: number
        currentGadget?: string
        /**
         * The UNIX timestamp at which the player claimed their year 100
         * century cake. Century cakes after 100 are claimed_century_cake{year}.
         */
        claimed_century_cake?: number
        /**
         * The key is formatted as claimed_century_cake{year}. The century
         * cake for the year 100, though, is in the `claimed_century_cake`
         * field.
         */
        [key: `claimed_century_cake${number}00`]: number
        [key: `adventRewards${number}` | `adventRewards_v2_${number}`]: Record<`day${number}`, number>
        claimed_year143_cake?: number
        mostRecentGameType?: string
    }

}

