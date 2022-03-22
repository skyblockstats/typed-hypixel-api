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
        achievements: Record<string, number>
        housingMeta: Record<string, any>
        voting: Record<string, number>
        mcVersionRp: string
        karma: number
        petConsumables: Record<string, number>
        levelingReward_0: boolean
        levelingReward_1: boolean
        levelingReward_2: boolean
        levelingReward_3: boolean
        vanityMeta: {
            packages: string[]
        }
    }

}

