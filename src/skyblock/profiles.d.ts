export interface DungeonStats {
    times_played?: {
        0: number
    }
    experience?: number
    tier_completions?: {
        0: number
    }
    fastest_time?: {
        0: number
    }
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
        damage_mitigated: number
        ally_healing: number
    }[]>
    best_score?: Record<number, number>
    mobs_killed?: Record<number, number>
    most_mobs_killed?: Record<number, number>
    most_damage_archer?: Record<number, number>
    most_healing?: Record<number, number>
    watcher_kills?: Record<number, number>
    most_damage_tank?: Record<number, number>,
    fastest_time_s_plus?: Record<number, number>,
    most_damage_mage?: Record<number, number>,
    most_damage_healer?: Record<number, number>,
    fastest_time_s?: Record<number, number>,
    most_damage_berserk?: Record<number, number>
}

interface Inventory {
    type: 0
    data: string
}

export interface ApiKeyInformationResponse {
    success: true
    profiles: {
        profile_id: string
        members: Record<string, {
            last_save: number
            inv_armor: Inventory
            coop_invitation?: {
                timestamp: number
                /**
                 * The undashed UUID of the coop member who invited this member
                 */
                invited_by: string
                confirmed: boolean
                confirmed_timestamp: number
            },
            first_join: number
            first_join_hub: number
            stats: Record<string, number>
            objectives: Record<string, {
                status: 'ACTIVE' | 'COMPLETE'
                progress: number
                completed_at: number
            }>
            tutorial: string[]
            quests: Record<string, {
                status: 'ACTIVE' | 'COMPLETE'
                activated_at: number
                activated_at_sb: number
                completed_at: number
                completed_at_sb: number
            }>
            coin_purse: number
            last_death: number
            crafted_generators?: string[]
            visited_zones: string[]
            fairy_souls_collected: number
            fairy_souls?: number
            fairy_exchanges?: number
            fishing_treasure_caught?: number
            death_count?: number
            /**
             * The names of the islands this user has created, in all caps
             */
            achievement_spawned_island_types?: string[]
            slayer_bosses?: Record<'wolf' | 'zombie' | 'spider' | 'enderman', {
                claimed_levels: {
                    [`level_${number}`]?: true
                }
                [`boss_kills_tier_${number}`]?: number
                boss_kills_tier_1?: number
                xp?: number
            }>
            pets?: []
            dungeons?: {
                dungeon_types: {
                    catacombs: DungeonStats
                    master_catacombs: DungeonStats
                }
                player_classes: Record<
                    'healer' | 'mage' | 'berserk' | 'archer' | 'tank',
                    { experience: number }
                >
                dungeon_journal: {}
                /**
                 * This lists the dungeon people who the player has talked to
                 * in the format <npcname>_first_talk
                 */
                dungeons_blah_blah?: string[]
            }
            griffin?: {
                burrows: []
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
                }>
            }
            perks?: {}
            harp_quest?: {
                selected_song: string
                selected_song_epoch: number
                [`song_${string}_best_completion`]?: number,
                [`song_${string}_completions`]?: number,
                [`song_${string}_perfect_completions`]?: number,
            }
            active_effects: []
            paused_effects?: []
            visited_modes?: string[]
            temp_stat_buffs?: {
                stat: number
                key: string
                amount: number
                expire_at: number
            }[]
            mining_core?: {
                nodes: {}
                received_free_tier?: true
                tokens?: number
            }
            forge?: {
                forge_processes: {}
            }
            [`experience_skill_${string}`]?: number
            unlocked_coll_tiers?: string[]
            backpack_contents?: Record<number, Inventory>
            quiver?: Inventory
            sacks_counts?: Record<string, number>
            talisman_bag?: Inventory
            backpack_icons?: Record<number, Inventory>
            essence_diamond?: number
            fishing_bag?: Inventory
            wardrobe_equipped_slot?: number
            collection?: Record<string, number>
            essence_dragon?: number
            ender_chest_contents?: Inventory
            wardrobe_contents?: Inventory
            potion_bag?: Inventory
            personal_vault_contents?: Inventory
            inv_contents?: Inventory
            essence_wither?: Inventory
            essence_spider?: Inventory
            candy_inventory_contents?: Inventory
        }>
        cute_name: string
    }[]
}
