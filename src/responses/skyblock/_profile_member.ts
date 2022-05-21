import { DatabaseInventory, Inventory, ITEM_RARITY } from './_item'
import { SkyBlockBanking } from './_profile'

export interface DungeonStats {
	times_played?: Record<number, number>
	experience?: number
	tier_completions?: Record<number, number>
	fastest_time?: Record<number, number>
	best_runs?: Record<
		number,
		{
			timestamp: number
			score_exploration: number
			score_speed: number
			score_skill: number
			score_bonus: number
			dungeon_class: string
			/**
			 * Dashed UUIDs of the other people in this
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
		}[]
	>
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

export interface Pet {
	uuid?: string | null
	type: string
	exp: number
	active: boolean
	tier: ITEM_RARITY
	heldItem: string | null
	candyUsed: number
	skin?: string | null
	/** This seems to be unused. */
	extra?: Record<any, never>
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
export type SkyBlockSlayerBosses = 'wolf' | 'zombie' | 'spider' | 'enderman' | 'blaze'

export interface ExperimentationGame {
	/** The timestamp of the start of the last attempt. */
	last_attempt?: number
	/** The timestamp of when the last game was won. */
	last_claimed?: number
	bonus_clicks?: number

	/** The number of times the player has attempted the first type of this game. */
	attempts_0?: number
	/** The number of times the player has finished this game type. */
	claims_0?: number
	/** The best score the player has gotten on this game type. */
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

export interface SkyBlockJournalEntries {
	karylles_diary?: number[]
	the_study?: number[]
	uncanny_remains?: number[]
	grim_adversity?: number[]
	the_walls?: number[]
	the_eye?: number[]
	aftermath?: number[]
	necrons_magic_scroll?: number[]
	murderer?: number[]

	the_follower?: number[]
	the_follower_2?: number[]

	expedition_volume_1?: number[]
	expedition_volume_2?: number[]
	expedition_volume_3?: number[]
	expedition_volume_4?: number[]

	the_apprentice?: number[]
	the_apprentice_2?: number[]
	the_apprentice_3?: number[]
}

export interface ForgeProcess {
	type: string
	id: string
	/** A UNIX timestamp. */
	startTime: number
	slot: number
	notified: boolean
}

export interface SkyBlockProfileMember {
	last_save?: number
	/**
	 * Information about how the member was invited to the co-op. This only
	 * shows up on co-op profiles, but it still shows up for the creator of the
	 * profile. If the member created the profile, the timestamps are for when
	 * the user started and ended creation. [citation needed]
	 */
	coop_invitation?: {
		/**
		 * The UNIX timestamp at which the invitation was first sent. If the
		 * member is the owner of the profile, this is when they started
		 * creating the profile. [citation needed]
		 */
		timestamp: number
		/**
		 * The undashed UUID of the coop member who invited this member
		 */
		invited_by: string
		/** Whether the user accepted the co-op invitation. */
		confirmed: boolean
		/** The UNIX timestamp for when the user accepted the co-op invitation. If the
		 * member is the owner of hte profile, this is when they finished
		 * creating the profile. [citation needed]
		 */
		confirmed_timestamp?: number
	}
	first_join?: number
	first_join_hub?: number
	/**
	 * A record of the stat id to a number for each stat that the user has. For
	 * example, { deaths_void: 500 } would mean that the user died to the void
	 * 500 times. There's also stats like `deaths` that are the total combined
	 * amount for their category.
	 */
	stats: Record<string, number>
	/**
	 * The objectives that the user has. Each objective can be either ACTIVE or
	 * COMPLETE, and has a `progress` value in between 0 and 1. Some objectives
	 * like `collect_ingots` have extra data attached that are relevant to the
	 * objective.
	 */
	objectives: Record<string, SkyBlockObjective> & {
		collect_ingots?: SkyBlockObjective & {
			IRON_INGOT: boolean
			GOLD_INGOT: boolean
		}
	}
	tutorial?: string[]
	quests: Record<
		string,
		{
			status: 'ACTIVE' | 'COMPLETE'
			activated_at: number
			activated_at_sb: number
			completed_at: number
			completed_at_sb: number
		}
	>
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
	slayer_bosses?: Partial<
		Record<
			SkyBlockSlayerBosses,
			{
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
			} & Record<`boss_kills_tier_${number}`, number>
		>
	>
	/** The pets that the member has */
	pets?: Pet[]
	dungeons?: {
		dungeon_types: {
			catacombs?: DungeonStats
			master_catacombs?: DungeonStats
		}
		player_classes: Record<SkyBlockDungeonClasses, { experience?: number }> | {}
		dungeon_journal: {
			journal_entries?: SkyBlockJournalEntries
		}
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
		medals_inv: {
			/** The number of bronze medals the player has won. */
			bronze?: number
			/** The number of silver medals the player has won. */
			silver?: number
			/** The number of gold medals the player has won. */
			gold?: number
		}
		perks: {
			double_drops?: number
			farming_level_cap?: number
		}
		/**
		 * The key is the contest year, date, and item separated by colon.
		 * Example: `193:1_20:WHEAT`.
		 */
		contests?: Record<
			string,
			{
				/** The amount of the item that this player collected */
				collected: number
				/** Whether the player has claimed their rewards for their position yet. */
				claimed_rewards?: boolean
				/** The position that the player placed in the contest. */
				claimed_position?: number
				/**
				 * The number of people who participated in this contest
				 */
				claimed_participants?: number
			}
		>
		/** Whether the player has talked to the Jacob NPC */
		talked?: true
		/**
		 * The set of items that the user has gotten a gold medal for before.
		 * This is a bit redundant since it can be calculated from the
		 * medals_inv.
		 */
		unique_golds2?: string[]
	}
	/**
	 * The experimentation table is an item that has a few minigames that can
	 * be played once per day. When playing an experimentation game, you can
	 * choose a difficulty or "type", ranging from beginner to metaphysical.
	 * Not all experimentation games start at the same type though.
	 */
	experimentation?: {
		/**
		 * Superpairs. This is the main experimentation game, with types
		 * ranging from beginner to metaphysical.
		 **/
		pairings: ExperimentationGame
		/**
		 * Chronomatron. The types are ranging from high to metaphysical.
		 */
		simon: ExperimentationGame
		/** Ultrasequencer. The types range from supreme to metaphysical. */
		numbers?: ExperimentationGame
		/**
		 * The number of extra daily games the player bought last time they
		 * bought extra games. This only goes up to 3.
		 */
		claims_resets?: number
		claims_resets_timestamp?: number
	}
	perks?: {
		permanent_strength?: number
		permanent_intelligence?: number
		permanent_speed?: number
		permanent_defense?: number
		permanent_health?: number

		catacombs_strength?: number
		catacombs_boss_luck?: number
		catacombs_looting?: number
		catacombs_crit_damage?: number
		catacombs_health?: number
		catacombs_defense?: number
		catacombs_intelligence?: number

		forbidden_blessing?: number
		revive_stone?: number
	}
	harp_quest?: {
		selected_song?: string
		selected_song_epoch?: number
		claimed_talisman?: true
	} & Record<`song_${string}_best_completion`, number> &
		Record<`song_${string}_completions`, number> &
		Record<`song_${string}_perfect_completions`, number>
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
		nodes?: {
			special_0?: number
			daily_effect?: number
			mining_fortune?: number
			titanium_insanium?: number
			mining_speed_boost?: number
			random_event?: number
			mining_madness?: number
			goblin_killer?: number
			lonesome_miner?: number
			professional?: number
			fortunate?: number
			mining_fortune_2?: number
			powder_buff?: number
			daily_powder?: number
			mining_experience?: number
			forge_time?: number
			pickaxe_toss?: number
			experience_orbs?: number
			maniac_miner?: number

			great_explorer?: number
			mole?: number
			efficient_miner?: number
			mining_speed?: number
			mining_speed_2?: number

			toggle_great_explorer?: boolean
			toggle_mole?: boolean
			toggle_efficient_miner?: boolean
			toggle_mining_speed?: boolean
			toggle_mining_speed_2?: boolean
		}
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
			dwarven: {
				statues_placed?: undefined[]
			}
			precursor?: {
				parts_delivered: []
				talked_to_professor?: true
			}
			goblin?: {
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
			forge_1?: Record<number, ForgeProcess>
		}
	}
	/** Extra information about the user's accessory bag upgrades and powers. */
	accessory_bag_storage?: {
		/** The member's tuning templates. https://wiki.hypixel.net/Powers#Tuning_Templates */
		tuning: {
			/**
			 * A tuning template. This is formatted as a record of stat ids to
			 * their upgraded value, for example { strength: 104 }.
			 * You can find more info at https://wiki.hypixel.net/Powers#Tuning_Templates
			 */
			[key: `slot_${number}`]: Record<string, number>
			/**
			 * The number of extra tuning templates unlocked. For
			 * example, if this is 2, `slot_0`, `slot_1`, and `slot_2` will be
			 * in `tuning`. If this is missing, you can assume it's 0.
			 */
			highest_unlocked_slot?: number
		}
		/**
		 * The number of times the player has bought extra slots for their
		 * accessory bag. The unofficial wiki contains a table of the extra
		 * slots you gain per purchase.
		 * https://hypixel-skyblock.fandom.com/wiki/Accessory_Bag
		 */
		bag_upgrades_purchased?: number
		/** The prefix of the active power stone. Power stones give you extra stats. */
		selected_power?: string
		/** The prefixes of the power stones that the member has unlocked. */
		unlocked_powers?: string[]
	}
	unlocked_coll_tiers?: string[]
	sacks_counts?: Record<string, number>

	essence_diamond?: number
	essence_gold?: number
	essence_dragon?: number
	essence_wither?: number
	essence_spider?: number
	essence_undead?: number
	essence_ice?: number

	wardrobe_equipped_slot?: number
	collection?: Record<string, number>

	backpack_contents?: Record<number, Inventory>
	backpack_icons?: Record<number, Inventory>

	inv_armor?: Inventory
	talisman_bag?: Inventory
	quiver?: Inventory
	fishing_bag?: Inventory
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

// https://stackoverflow.com/a/55032655
type Modify<T, R> = Omit<T, keyof R> & R

export interface DatabaseLastSavedVersion {
	/**
	 * The internal SkyBlock version of when the player
	 * last logged onto SkyBlock, like `0.7.47`.
	 */
	pluginVersion: string
	bootTime: number
	gmVersion: string
	/**
	 * The internal Hypixel version of when the player last
	 * logged onto SkyBlock, like `1.0.123`.
	 */
	hyVersion: string
	/** A server id, like `mini149D`. */
	server: string
}

/** How profile members are represented in Hypixel's database. */
export type DatabaseSkyBlockProfileMember = Modify<
	SkyBlockProfileMember,
	{
		profile_id: string
		cute_name: string
		/**
		 * The UUID of the player whose stats we're viewing. This isn't always
		 * present, for whatever reason.
		 */
		player_id?: string
		profile_version: number

		/** An array of UUIDs, including this person. */
		coop?: string[]
		coop_initiator?: boolean
		coop_confirmed?: boolean

		level_experience: number
		first_join_skyblock_time: number
		held_item_slot: number
		ingame_time: number
		auction_placed_bid_before?: true
		auction_starting_bid: number
		auction_duration_ms: number
		dark_auction_items?: undefined[]
		claimable_rewards?: 'psychic'[]
		achievement_sync_version: number
		/** A set of coordinates and two more numbers. Looks like `9.0,100.0,14.0,0.0,0.0`. */
		private_island_spawn_location?: string
		lastAhMessage?: number

		bank_account?: number
		bank_history?: SkyBlockBanking['transactions']

		last_checked_interest: number
		last_interest: number
		last_interest_time?: number

		[key: `${string}_stamped`]: true

		playtime_minutes: number
		[key: `playtime_minutes_modes_${string}`]: number

		exploit_start_timestamp: number
		exploit_block_counter: number
		exploit_fish_counter: number
		exploit_monster_counter: number

		shop_throttle?: {
			/** A date, like `07-29-2019`. */
			lastUpdate: string
		}

		damage_MAGMA_CUBE_BOSS_100?: number
		damage_WISE_DRAGON_100?: number
		damage_UNSTABLE_DRAGON_100?: number
		damage_STRONG_DRAGON_100?: number

		quiver_size?: number
		talisman_bag_size?: number

		inv_armor?: DatabaseInventory
		talisman_bag?: DatabaseInventory
		quiver?: DatabaseInventory
		fishing_bag?: DatabaseInventory
		ender_chest_contents?: DatabaseInventory
		wardrobe_contents?: DatabaseInventory
		potion_bag?: DatabaseInventory
		personal_vault_contents?: DatabaseInventory
		inv_contents?: DatabaseInventory
		candy_inventory_contents?: DatabaseInventory

		slayer_quest?: SkyBlockProfileMember['slayer_quest'] & {
			last_killed_mob_id: string
			last_killed_timestamp: number
		}

		lastSaveVersion: DatabaseLastSavedVersion
		lastSaveTimestamp: number
	}
>
