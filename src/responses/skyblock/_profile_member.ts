export interface DungeonStats {
    times_played?: Record<number, number>
    experience?: number
    tier_completions?: Record<number, number>
    fastest_time?: Record<number, number>
    best_runs?: Record<number, {
        timestamp: number
        score_exploration: number
        score_speed: number
        score_skill: number
        score_bonus: number
        dungeon_class: string
        /**
         * Undashed UUIDs of the other people in this
         * run, not including the member
         */
        teammates: string[]
        elapsed_time: number
        damage_dealt: number
        deaths: number
        mobs_killed: number
        secrets_found: number
        damage_mitigated?: number
        ally_healing?: number
    }[]>
    best_score?: Record<number, number>
    mobs_killed?: Record<number, number>
    most_mobs_killed?: Record<number, number>
    most_damage_archer?: Record<number, number>
    most_healing?: Record<number, number>
    watcher_kills?: Record<number, number>
    highest_tier_completed?: number
    most_damage_tank?: Record<number, number>
    fastest_time_s_plus?: Record<number, number>
    most_damage_mage?: Record<number, number>
    most_damage_healer?: Record<number, number>
    fastest_time_s?: Record<number, number>
    most_damage_berserk?: Record<number, number>
    milestone_completions?: Record<number, number>
}

export interface Inventory {
    type: 0
    data: string
}

export interface Pet {
    uuid?: string | null
    type: string
    exp: number
    active: boolean
    tier: string
    heldItem: string | null
    candyUsed: number
    skin?: string | null
}

export interface SkyBlockObjective {
    status: 'ACTIVE' | 'COMPLETE'
    progress: number
    completed_at: number
}

export interface SkyBlockPotionEffect {
    effect: string
    level: number
    modifiers: {
        key: string
        amp: number
    }[]
    ticks_remaining: number
    infinite: boolean
}

export type SkyBlockDungeonClasses = 'healer' | 'mage' | 'berserk' | 'archer' | 'tank'
export type SkyBlockSlayerBosses = 'wolf' | 'zombie' | 'spider' | 'enderman'

export interface ExperimentationGame {
    /** The timestamp at which the experiment was last attempted */
    last_attempt?: number
    last_claimed?: number
    bonus_clicks?: number

    attempts_0?: number
    claims_0?: number
    best_score_0?: number

    attempts_1?: number
    claims_1?: number
    best_score_1?: number
    attempts_2?: number

    claims_2?: number
    best_score_2?: number

    attempts_3?: number
    claims_3?: number
    best_score_3?: number

    attempts_4?: number
    claims_4?: number
    best_score_4?: number

    attempts_5?: number
    claims_5?: number
    best_score_5?: number
}

export interface SkyBlockCrystalStatus {
    state: 'NOT_FOUND' | 'FOUND'
    total_placed: number
    total_found: number
}

export interface SkyBlockProfileMember {
    last_save?: number
    inv_armor?: Inventory
    coop_invitation?: {
        timestamp: number
        /**
         * The undashed UUID of the coop member who invited this member
         */
        invited_by: string
        confirmed: boolean
        confirmed_timestamp?: number
    }
    first_join?: number
    first_join_hub?: number
    stats: Record<string, number>
    objectives: Record<string, SkyBlockObjective> & ({
        collect_ingots?: SkyBlockObjective & {
            IRON_INGOT: boolean
            GOLD_INGOT: boolean
        }
    })
    tutorial?: string[]
    quests: Record<string, {
        status: 'ACTIVE' | 'COMPLETE'
        activated_at: number
        activated_at_sb: number
        completed_at: number
        completed_at_sb: number
    }>
    coin_purse?: number
    last_death: number
    crafted_generators?: string[]
    visited_zones?: string[]
    fairy_souls_collected?: number
    fairy_souls?: number
    fairy_exchanges?: number
    fishing_treasure_caught?: number
    death_count?: number
    /**
     * The names of the islands this user has created, in all caps
     */
    achievement_spawned_island_types?: string[]
    slayer_quest?: {
        type: SkyBlockSlayerBosses
        tier: number
        start_timestamp: number
        completion_state: number
        combat_xp?: number
        recent_mob_kills?: {
            xp: number
            timestamp: number
        }[]
        last_killed_mob_island?: string
        xp_on_last_follower_spawn?: number
        spawn_timestamp?: number
        kill_timestamp?: number
    }
    slayer_bosses?: Partial<Record<SkyBlockSlayerBosses, {
        claimed_levels?: {
            level_1?: boolean
            level_2?: boolean
            level_3?: boolean
            level_4?: boolean
            level_5?: boolean
            level_6?: boolean
            level_7?: boolean
            level_8?: boolean
            level_9?: boolean

            /**
             * Revs have "special" tiers, for whatever reason. You can just
             * treat these as normal levels
             */
            level_7_special?: boolean
            /**
             * Revs have "special" tiers, for whatever reason. You can just
             * treat these as normal levels
             */
            level_8_special?: boolean
            /**
             * Revs have "special" tiers, for whatever reason. You can just
             * treat these as normal levels
             */
            level_9_special?: boolean
        }
        xp?: number
    } & Record<`boss_kills_tier_${number}`, number>>>
    pets?: Pet[]
    dungeons?: {
        dungeon_types: {
            catacombs?: DungeonStats
            master_catacombs?: DungeonStats
        }
        player_classes: Record<
            SkyBlockDungeonClasses,
            { experience?: number }
        > | {}
        dungeon_journal: {}
        /**
         * This lists the dungeon people who the player has talked to
         * in the format <npcname>_first_talk
         */
        dungeons_blah_blah?: string[]
        selected_dungeon_class?: SkyBlockDungeonClasses
        daily_runs?: {
            current_day_stamp: number
            completed_runs_count: number
        }
    }
    griffin?: {
        burrows?: {
            ts: number
            x: number
            y: number
            z: number
            type: number
            tier: number
            chain: number
        }[]

    }
    jacob2?: {
        medals_inv: {}
        perks: {}
        /**
         * Key example: 193:1_20:WHEAT
         * I don't know what the 1_20 means
         */
        contests?: Record<string, {
            collected: number
            claimed_rewards?: boolean
            claimed_position?: number
            claimed_participants?: number
        }>
        talked?: true
        unique_golds2?: string[]
    }
    experimentation?: {
        pairings: ExperimentationGame
        simon: ExperimentationGame
        numbers: ExperimentationGame
        claims_resets?: number
        claims_resets_timestamp?: number
    }
    perks?: {}
    harp_quest?: {
        selected_song?: string
        selected_song_epoch?: number
        claimed_talisman?: true
    } & Record<`song_${string}_best_completion`, number>
    & Record<`song_${string}_completions`, number>
    & Record<`song_${string}_perfect_completions`, number>
    fastest_target_practice?: number
    active_effects?: SkyBlockPotionEffect[]
    paused_effects?: SkyBlockPotionEffect[]
    disabled_potion_effects?: string[]
    visited_modes?: string[]
    temp_stat_buffs?: {
        stat: number
        key: string
        amount: number
        expire_at: number
    }[]
    mining_core?: {
        nodes?: {}
        received_free_tier?: true
        tokens?: number
        powder_mithril?: number
        powder_mithril_total?: number
        experience?: number
        retroactive_tier2_token?: boolean

        current_daily_effect?: string
        /** This isn't a timestamp, but I don't know what it is */
        current_daily_effect_last_changed?: number

        tokens_spent?: number
        powder_spent_mithril?: number
        crystals?: Record<`${string}_crystal`, SkyBlockCrystalStatus | {}>
        greater_mines_last_access?: number
        biomes?: {
            dwarven: {}
            precursor: {
                parts_delivered: []
                talked_to_professor?: true
            }
            goblin: {
                king_quest_active: boolean
                king_quests_completed: number
            }
        }
        selected_pickaxe_ability?: string | null
        last_reset?: number

        daily_ores_mined_day_mithril_ore?: number
        daily_ores_mined_mithril_ore?: number

        daily_ores_mined_day_gemstone?: number
        daily_ores_mined_gemstone?: number

        powder_gemstone?: number
        powder_gemstone_total?: number

        powder_spent_gemstone?: number

        daily_ores_mined_day?: number
        daily_ores_mined?: number
    }
    forge?: {
        forge_processes: {
            forge_1?: {}
        }
    }
    unlocked_coll_tiers?: string[]
    backpack_contents?: Record<number, Inventory>
    quiver?: Inventory
    sacks_counts?: Record<string, number>
    talisman_bag?: Inventory
    backpack_icons?: Record<number, Inventory>

    essence_diamond?: number
    essence_gold?: number
    essence_dragon?: number
    essence_wither?: number
    essence_spider?: number
    essence_undead?: number
    essence_ice?: number

    fishing_bag?: Inventory
    wardrobe_equipped_slot?: number
    collection?: Record<string, number>
    ender_chest_contents?: Inventory
    wardrobe_contents?: Inventory
    potion_bag?: Inventory
    personal_vault_contents?: Inventory
    inv_contents?: Inventory
    candy_inventory_contents?: Inventory

    experience_skill_alchemy?: number
    experience_skill_carpentry?: number
    experience_skill_combat?: number
    experience_skill_enchanting?: number
    experience_skill_farming?: number
    experience_skill_fishing?: number
    experience_skill_foraging?: number
    experience_skill_mining?: number
    experience_skill_runecrafting?: number
    experience_skill_social?: number
    experience_skill_taming?: number
}