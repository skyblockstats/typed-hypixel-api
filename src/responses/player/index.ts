import { ITEM_RARITY } from '../skyblock/_item'
import {
	DatabaseLastSavedVersion,
	DatabaseSkyBlockProfileMember,
} from '../skyblock/_profile_member'
import { BedwarsStats } from './_bedwars'
import { DuelsStats } from './_duels'
import { SurvivalGamesStats } from './_survivalgames'
import { PitStats } from './_pit'
import { SkyClashStats } from './_skyclash'
import { SkyWarsStats } from './_skywars'
import { SmashHeroesStats } from './_smashheroes'
import { WarlordsStats } from './_warlords'
import { TntGamesStats } from './_tntgames'
import { UhcStats } from './_uhc'
import { VampireZStats } from './_vampirez'
import { MegaWallsStats } from './_mega_walls'
import { SpeedUhcStats } from './_speeduhc'
import { MurderMysteryStats } from './_murdermystery'

export interface Tourneys {
	// we have to do this because typescript literals are greedy and games with underscores would fail
	[
		key:
			| `${string}_${number}`
			| `${string}_${string}_${number}`
			| `${string}_${string}_${string}_${number}`
	]: {
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
		profile_id: string
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
		/** An array of ids of one-time achievements that the player has unlocked. */
		achievementsOneTime: string[]
		clock?: boolean
		/**
		 * The username of the player that Hypixel has cached. Identical to
		 * `playername`.
		 */
		displayname: string
		eulaCoins?: boolean
		fireworkStorage?: {
			flight_duration: number
			shape: string
			trail: boolean
			twinkle: boolean
			colors: string
			fade_colors: string
			selected: boolean
		}[]
		/** The UNIX timestamp at which the player first joined Hypixel. */
		firstLogin: number
		friendRequests?: string[]
		/**
		 * The previous usernames of the player including their current one,
		 * without duplicates, sorted by oldest first.
		 */
		knownAliases: string[]
		/**
		 * The lowercased previous usernames of the player including their
		 * current one, without duplicates, sorted by oldest first.
		 */
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

		/** The UNIX timestamp of when the player last logged in. */
		lastLogin?: number
		networkExp: number
		notifications?: boolean

		/**
		 * The username of the player that Hypixel has cached. Identical to
		 * `displayname`.
		 */
		playername: string
		pp?: 'villager'
		seeRequests?: boolean
		spec_first_person?: boolean
		spectators_invisible?: boolean
		stats: {
			Arcade?: {
				blood: boolean
				bounty_head?: string
				bounty_kills_oneinthequiver: number
				coins: number
				deaths_oneinthequiver: number
				deaths_throw_out: number
				flash?: boolean
				enderspleef_trail?: string
				headshots_dayone: number
				hints: boolean
				kills_dayone: number
				kills_dragonwars2: number
				kills_oneinthequiver: number
				kills_throw_out: number
				max_wave?: number
				packages: string[]
				poop_collected: number
				stamp_level: number
				throwout_disguise?: string
				time_stamp: number
				wins_dayone: number
				wins_dragonwars2?: number
				wins_ender: number
				wins_farm_hunt: number
				wins_oneinthequiver?: number
				wins_party?: number
				wins_throw_out: number
				deaths_grind?: number
				kills_grind?: number
				kills_spaceraiders?: number
				wins_spaceraiders?: number
				sw_shots_fired: number
				sw_deaths: number
				wins_party_3?: number
				rounds_hole_in_the_wall: number
				wins_hole_in_the_wall: number
				rounds_santa_says: number
				monthly_coins_b: number
				weekly_coins_b: number
				weekly_coins_a: number
				monthly_coins_a: number
				miniwalls_activeKit: string
				arrows_hit_mini_walls: number
				final_kills_mini_walls?: number
				kills_mini_walls: number
				deaths_mini_walls: number
				arrows_shot_mini_walls: number
				wither_damage_mini_walls: number
				sw_empire_kills: number
				sw_weekly_kills_a?: number
				/**
				 * An ISO 639-1 representation of the language the user has
				 * set. If omitted, default to `en`. I haven't confirmed
				 * whether this is actually used for anything, since the user's
				 * language is also in the `userLanguage` field.
				 */
				language?: string
				sw_kills: number
				sw_weekly_kills_b: number
				sw_game_wins?: number
				sw_monthly_kills_b: number
				sw_monthly_kills_a: number
				sw_rebel_kills: number
				hitw_record_q?: number
				hitw_record_f?: number
				powerkicks_soccer: number
				goals_soccer: number
				wins_mini_walls: number
				wither_kills_mini_walls: number
				rounds_simon_says: number
				dec2016_achievements: boolean
				dec2016_achievements2: boolean
				party_pooper_hider_wins_hide_and_seek?: number
				hider_wins_hide_and_seek?: number
				wins_simon_says?: number
				basic_zombie_kills_zombies?: number
				best_round_zombies?: number
				best_round_zombies_deadend?: number
				best_round_zombies_deadend_normal?: number
				blaze_zombie_kills_zombies?: number
				bullets_hit_zombies?: number
				bullets_shot_zombies?: number
				deaths_zombies?: number
				deaths_zombies_deadend?: number
				deaths_zombies_deadend_normal?: number
				doors_opened_zombies?: number
				doors_opened_zombies_deadend?: number
				doors_opened_zombies_deadend_normal?: number
				empowered_zombie_kills_zombies?: number
				fastest_time_10_zombies?: number
				fastest_time_10_zombies_deadend_normal?: number
				fire_zombie_kills_zombies?: number
				headshots_zombies?: number
				magma_cube_zombie_kills_zombies?: number
				magma_zombie_kills_zombies?: number
				pig_zombie_zombie_kills_zombies?: number
				times_knocked_down_zombies?: number
				times_knocked_down_zombies_deadend?: number
				times_knocked_down_zombies_deadend_normal?: number
				tnt_baby_zombie_kills_zombies?: number
				tnt_zombie_kills_zombies?: number
				total_rounds_survived_zombies?: number
				total_rounds_survived_zombies_deadend?: number
				total_rounds_survived_zombies_deadend_normal?: number
				windows_repaired_zombies?: number
				windows_repaired_zombies_deadend?: number
				windows_repaired_zombies_deadend_normal?: number
				wolf_zombie_kills_zombies?: number
				zombie_kills_zombies?: number
				zombie_kills_zombies_deadend?: number
				zombie_kills_zombies_deadend_normal?: number
				party_pooper_seeker_wins_hide_and_seek?: number
				seeker_wins_hide_and_seek?: number
				wins_grinch_simulator_v2?: number
				gifts_grinch_simulator_v2?: number
				lastTourneyAd?: number
				round_wins_simon_says?: number
				top_score_simon_says?: number
				animal_slaughter_best_score_party?: number
				animal_slaughter_kills_party?: number
				anvil_spleef_best_time_party?: number
				chicken_rings_best_time_party?: number
				dive_best_score_party?: number
				dive_total_score_party?: number
				lawn_moower_mowed_best_score_party?: number
				lawn_moower_mowed_total_score_party?: number
				total_stars_party?: number
				bombardment_best_time_party?: number
				fire_leapers_round_wins_party?: number
				frozen_floor_round_wins_party?: number
				high_ground_best_score_party?: number
				high_ground_total_score_party?: number
				round_wins_party?: number
				rpg_16_kills_best_score_party?: number
				rpg_16_kills_party?: number
				chicken_rings_round_wins_party?: number
				jigsaw_rush_best_time_party?: number
				blocks_destroyed_ender?: number
				powerup_activations_ender?: number
				tripleshot_powerup_activations_ender?: number
				bigshot_powerup_activations_ender?: number
				the_floor_is_lava_best_time_party?: number
				kicks_soccer?: number
				showinfobook?: boolean
			}
			Arena?: {
				active_rune?: string
				chest_opens?: number
				coins?: number
				coins_spent?: number
				damage_2v2?: number
				damage_4v4?: number
				deaths_2v2?: number
				deaths_4v4?: number
				damage_error?: number
				damage_ffa?: number
				damage_taken_error?: number
				games_2v2?: number
				games_4v4?: number
				games_ffa?: number
				heal_error?: number
				deaths_ffa?: number
				hat?: string
				healed_2v2?: number
				healed_4v4?: number
				healed_ffa?: number
				keys?: number
				kills_2v2?: number
				kills_4v4?: number
				kills_error?: number
				kills_ffa?: number
				losses_2v2?: number
				losses_4v4?: number
				losses_ffa?: number
				lvl_health?: number
				mage_spec?: string
				magical_chest?: number
				offensive?: string
				packages: string[]
				paladin_spec?: string
				penalty?: number
				rating?: number
				support?: string
				ultimate?: string
				utility?: string
				warrior_spec?: string
				win_streaks_2v2?: number
				win_streaks_4v4?: number
				win_streaks_ffa?: number
				wins_2v2?: number
				wins_4v4?: number
				wins_ffa?: number
				rune_level_damage?: number
				lvl_damage?: number
				lvl_energy?: number
				lvl_cooldown?: number
				kills_1v1?: number
				damage_1v1?: number
				games_1v1?: number
				win_streaks_1v1?: number
				wins_1v1?: number
				healed_1v1?: number
				deaths_1v1?: number
				losses_1v1?: number
				rune_level_energy?: number
				rune_level_speed?: number
				rune_level_slowing?: number
				wins?: number
			}
			Battleground?: WarlordsStats
			HungerGames?: SurvivalGamesStats
			MCGO?: {
				ak_47_cost_reduction?: number
				ak_47_damage_increase?: number
				ak_47_range_increase?: number
				ak_47_recoil_reduction?: number

				bombs_defused: number
				bombs_planted: number
				coins: number
				cop_kills: number
				criminal_kills: number
				game_wins: number
				headshot_kills: number

				deaths: number
				deaths_deathmatch?: number

				kills: number
				weekly_kills_a?: number
				monthly_kills_b?: number

				killsNew: number
				killsNew_10_2014?: number
				killsNew_11_2014?: number
				killsNew_2_11_2014?: number
				killsNew_4_11_2014?: number
				killsNew_5_10_2014?: number
				killsNew_5_11_2014?: number

				kills_10_2014?: number
				kills_11_2014?: number
				kills_2_11_2014?: number
				kills_4_11_2014?: number
				kills_5_10_2014?: number
				kills_5_11_2014?: number

				mp5_cost_reduction?: number
				mp5_damage_increase?: number
				mp5_range_increase?: number
				mp5_recoil_reduction?: number

				selectedCarbineDev?: string
				selectedShotgunDev?: string
				selectedKnifeDev?: string
				selectedPistolDev?: string
				selectedSmgDev?: string
				selectedMagnumDev?: string

				selectedCreeperChestplateDev?: string
				selectedCreeperHelmetDev?: string
				selectedOcelotChestplateDev?: string

				knife_attack_delay?: number
				knife_damage_increase?: number

				packages: string[]

				pistol_damage_increase?: number
				pistol_recoil_reduction?: number
				pistol_reload_speed_reduction?: number

				round_wins: number
				shots_fired: number
				strength_training?: number
				bounty_hunter?: number
				pocket_change?: number
				selectedRifleDev: string

				rifle_cost_reduction?: number
				rifle_reload_speed_reduction?: number
				rifle_recoil_reduction?: number
				rifle_damage_increase?: number

				smg_cost_reduction?: number
				smg_reload_speed_reduction?: number
				smg_recoil_reduction?: number
				smg_damage_increase?: number

				sniper_damage_increase?: number
				sniper_recoil_reduction?: number

				carbine_cost_reduction: number
				carbine_reload_speed_reduction?: number
				carbine_recoil_reduction: number
				carbine_damage_increase: number

				magnum_cost_reduction?: number
				magnum_reload_speed_reduction?: number
				magnum_recoil_reduction?: number
				magnum_damage_increase?: number

				body_armor_cost?: number
				mcgo: { points: number }
				weekly_kills_b: number
				monthly_kills_a: number

				game_wins_alleyway?: number
				game_wins_sandstorm?: number
				game_wins_overgrown?: number

				sniper_charge_bonus?: number

				game_wins_deathmatch: number
				game_wins_atomic?: number

				criminal_kills_deathmatch?: number
				kills_deathmatch: number

				cop_kills_deathmatch?: number
				show_lobby_prefix: boolean
				grenadeKills?: number
				grenade_kills?: number
				lastTourneyAd: number
				deaths_tourney_mcgo_defusal_1?: number
			}
			Paintball?: {
				coins: number
				deaths: number
				fortune?: number
				hat?: string
				kills: number
				killstreaks: number
				packages: string[]
				shots_fired: number
				superluck?: number
				wins: number
				monthly_kills_b?: number
				weekly_kills_a?: number
				weekly_kills_b?: number
				monthly_kills_a?: number
				forcefieldTime?: number
				transfusion?: number
				godfather?: number
				endurance?: number
			}
			Quake?: {
				armor: string
				barrel: string
				case: string

				coins: number

				kills: number
				kills_teams: number
				kills_timeattack?: number
				kills_dm?: number
				kills_dm_teams?: number
				kills_since_update_feb_2017: number
				kills_since_update_feb_2017_solo_tourney?: number
				daily_kills?: number
				weekly_kills?: number
				weekly_kills_b?: number
				monthly_kills_b?: number

				wins: number
				wins_teams?: number

				headshots_teams?: number
				headshots_solo_tourney?: number

				shots_fired_tourney_quake_solo2_1?: number
				shots_fired_solo_tourney?: number

				distance_travelled_solo_tourney?: number

				deaths: number
				deaths_solo_tourney?: number

				hat?: string
				killsound: string
				killstreaks: number
				muzzle: string
				packages: string[]
				sight: string
				trigger: string
				instantRespawn: boolean
				null?: string

				showKillPrefix: boolean
				compass_selected: boolean
				alternative_gun_cooldown_indicator: boolean
				enable_sound: boolean
				highest_killstreak: number
				headshots: number
				distance_travelled: number
				shots_fired: number

				dash_cooldown?: string
				dash_power?: string

				boots?: string
				leggings?: string

				showDashCooldown: boolean
				distance_travelled_teams: number
				kills_since_update_feb_2017_teams: number
				shots_fired_teams: number
				deaths_teams: number
				beam?: string
				"messageOthers' Kills/deaths": boolean
				'messageYour Deaths': boolean
				'messageCoin Messages': boolean
				'messageYour Kills': boolean
				'messageMulti-kills': boolean
				messageKillstreaks: boolean
				messageCoin: boolean
				'messagePowerup Collections': boolean
				kills_solo_tourney: number
				lastTourneyAd?: number
				wins_tourney_quake_solo2_1?: number
				kills_tourney_quake_solo2_1?: number
				distance_travelled_tourney_quake_solo2_1?: number
				kills_since_update_feb_2017_tourney_quake_solo2_1?: number
				deaths_tourney_quake_solo2_1?: number
				killstreaks_tourney_quake_solo2_1?: number
				headshots_tourney_quake_solo2_1?: number
			}
			TNTGames?: TntGamesStats
			UHC?: UhcStats
			VampireZ?: VampireZStats
			Walls?: {
				coins: number
				packages: string[]

				deaths: number
				losses: number

				weekly_wins_a?: number
				weekly_wins_b?: number
				monthly_wins_b?: number
				monthly_wins_a?: number

				kills?: number
				weekly_kills_a?: number
				weekly_kills_b?: number
				monthly_kills_a?: number
				monthly_kills_b?: number

				assists?: number
				weekly_assists_b?: number
				monthly_assists_a?: number

				Inventory?: Record<number, `${number},${number}`>

				berserk?: number
				chef?: number
				grave_digger?: number
				guitarist?: number
				hunter?: number
				leather_worker?: number
				sage?: number
				snack_lover?: number
				vampirism?: number
				wins?: number
				boss_skills?: number
				boss_digger?: number
				boss_guardian?: number
				dwarwen_skills?: number
				farmer?: number
				stone_guardian?: number
				master_troll?: number
				lazyman?: number
				necromancer?: number
				canadian?: number
				bacon?: number
				opportunity?: number
				adrenaline?: number
				insane_farmer?: number
				skybase_king?: number
				bomberman?: number
				redstone_expert?: number
				step: number
				trap_engineer?: number
				escapist?: number
				blacksmith?: number
				ready?: number
				fisherman?: number
				chemist?: number
				smart_boy?: number
				artisan?: number
				cats_eye?: number
				fireproof?: number
				vitality: number
				expert_miner?: number
				tenacity?: number
				fortune: number
				chainkiller?: number
				haste?: number
				swift?: number
				scotsman?: number
				thats_hot?: number
				gold_rush?: number
				creeper_egg?: number
				final_form?: number
				get_to_the_choppa?: number
				very_fortunate?: number
				burn_baby_burn?: number
				einstein?: number
				pyromaniac?: number
				really_shiny?: number
				soup_drinker?: number
				ecologist?: number
				excavator?: number
				blacksmith_starter?: number
			}
			Walls3?: MegaWallsStats
			/** Turbo Kart Racers is called GingerBread. */
			GingerBread?: {
				engine_active: string
				skin_active: string
				booster_active: string
				frame_active: string
				packages: string[]
				helmet_active: string
				jacket_active: string
				pants_active: string
				shoes_active: string
				horn: string
				coins: number
				box_pickups: number
				banana_hits_sent: number
				laps_completed: number
				banana_hits_received: number
				coins_picked_up: number
				parts: string
				box_pickups_weekly_a: number
				box_pickups_weekly_b: number
				box_pickups_monthly_b: number
				box_pickups_olympus: number
				box_pickups_junglerush: number
				box_pickups_retro: number
				box_pickups_canyon: number
				olympus_plays: number
				junglerush_plays: number
				retro_plays: number
				canyon_plays: number
				wins: number

				bronze_trophy: number
				bronze_trophy_canyon: number
				bronze_trophy_weekly_a?: number
				bronze_trophy_weekly_b: number
				bronze_trophy_monthly_b: number
				bronze_trophy_hypixelgp?: number
				bronze_trophy_retro?: number

				silver_trophy: number
				silver_trophy_weekly_b: number
				silver_trophy_monthly_b: number
				silver_trophy_hypixelgp?: number
				silver_trophy_olympus?: number
				silver_trophy_retro?: number

				box_pickups_hypixelgp: number
				hypixelgp_plays: number
				blue_torpedo_hit: number
				box_pickups_monthly_a?: number
				lastTourneyAd: number
			}
			SkyWars?: SkyWarsStats
			TrueCombat?: {
				packages: string[]

				win_streak: number

				crazywalls_losses_solo?: number
				crazywalls_losses_solo_chaos?: number
				crazywalls_losses_team_chaos?: number

				crazywalls_deaths_solo?: number
				crazywalls_deaths_solo_chaos?: number
				crazywalls_deaths_team_chaos?: number

				crazywalls_kills_solo_chaos?: number
				crazywalls_kills_team_chaos?: number
				crazywalls_kills_weekly_b_solo_chaos?: number
				crazywalls_kills_weekly_b_team_chaos?: number
				crazywalls_kills_monthly_b_solo_chaos?: number
				crazywalls_kills_monthly_b_team_chaos?: number

				crazywalls_games_solo?: number
				crazywalls_games_solo_chaos?: number
				crazywalls_games_team_chaos?: number

				crazywalls_wins_solo_chaos?: number

				wins?: number
				losses?: number
				kills?: number
				deaths?: number

				team_bounty_hunter?: number
				team_rusher?: number
				team_blazing_arrow?: number

				golden_skulls?: number
				skulls_gathered?: number

				items_enchanted?: number
				coins: number
				survived_players?: number
				games?: number
				giant_zombie?: number
				kit_basic_chaos_weaponsmith?: number
				kills_weekly_b?: number
				kills_monthly_b?: number
				arrows_shot?: number
				solo_chaos_tomb_robber?: number
			}
			SuperSmash?: SmashHeroesStats
			SpeedUHC?: SpeedUhcStats
			SkyClash?: SkyClashStats
			Bedwars?: BedwarsStats
			MurderMystery?: MurderMysteryStats
			BuildBattle?: {
				packages: string[]
				coins: number

				wins: number
				wins_solo_normal?: number
				wins_solo_normal_latest?: number
				wins_solo_pro?: number
				wins_teams_normal?: number
				wins_guess_the_build?: number

				weekly_coins_a?: number
				weekly_coins_b?: number
				monthly_coins_a?: number
				monthly_coins_b?: number

				solo_most_points?: number
				teams_most_points?: number

				games_played: number
				score: number
				last_purchased_song?: string
				correct_guesses: number
				buildbattle_loadout: `${string}:${number}`[]
				total_votes?: number
				selected_backdrop?: string
				new_selected_hat?: string
			}
			Duels?: DuelsStats
			Legacy?: {
				leaderboard_paintball?: number
				quakecraft_tokens: number
				vampirez_tokens?: number

				paintball_arena?: number
				paintball_tokens?: number
				leaderboard_arena?: number
				arena_tokens?: number

				preferredChannel?: string
				walls_tokens?: number

				next_tokens_seconds: number
				total_tokens: number
				tokens: number
			}
			Pit?: PitStats
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
					| `visited_${string}`
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
		votesMissed?: number
		wardrobe?: string
		/** The delivery man. */
		eugene?: {
			/** A UNIX timestamp. */
			dailyTwoKExp: number
			/** A UNIX timestamp. */
			weekly_booster?: number
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
		petConsumables: Record<string, number>
		[key: `levelingReward_${number}`]: boolean
		vanityMeta: {
			packages: string[]
		}
		parkourCompletions: Record<
			string,
			{
				timeStart: number
				timeTook: number
			}[]
		>
		lastAdsenseGenerateTime: number
		lastClaimedReward?: number
		lastLogout?: number
		friendRequestsUuid: any[]
		gadget?: string
		/** An old field, doesn't seem to be used anymore. */
		hypixel_tutorial_tutorial?: true
		auto_spawn_pet?: boolean
		channel?: 'ALL' | 'PM' | 'PARTY'
		chat?: boolean
		/** This field doesn't seem to be used anymore. */
		chatAlerts?: boolean
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

		flashingNewsPopup?: (`${number}` | `${number}/`)[]
		flashingNewsPoppedUp?: number
		flashingNewsOpens?: number

		vote?: {
			chests: number
		}
		multiTunnel?: undefined[]
		INVALID?: true
		MAIN_LOBBY_6?: boolean

		/**
		 * Whether the player is on the Hypixel Build Team. Note that some
		 * admins have this as `true`.
		 */
		buildTeam?: boolean

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
				battleground?: number
				arcade?: number
				prototype?: number
				skywars?: number
				tntgames?: number
			}
		}
		socialMedia?: {
			prompt?: boolean
			links: {
				DISCORD?: string
				HYPIXEL?: string
				TWITCH?: string
				TWITTER?: string
				YOUTUBE?: string
				INSTAGRAM?: string
			}
			DISCORD?: string
			TWITCH?: string
			YOUTUBE?: string
			TWITTER?: string
		}
		disableTipMessages?: boolean
		guildNotifications?: boolean
		challenges: Record<string, Record<string, number>>
		spec_always_flying?: boolean
		userLanguage?: string
		monthlyRankColor?: 'AQUA'
		achievementSync: Record<string, number>
		tiered_achievement_menu_sort?: string
		parkourCheckpointBests?: Record<string, Record<number, number>>
		achievementPoints: number
		battlePassGlowStatus?: boolean
		lastMapVote?: number

		[key: `dmcrates-${number}-${number}`]: {
			REGULAR: boolean
			VIP?: boolean
			VIP_PLUS?: boolean
			MVP?: boolean
			MVP_PLUS?: boolean
		}
		monthlycrates?: Record<`${number}-${number}`, Record<string, boolean>>

		tourney?: Tourneys

		/** What stat will be shown above the player's username. */
		headStat?: 'ping'
		/** This doesn't seem to be used for anything anymore. */
		currentCloak?: 'PING'
		particlePack?: 'SPHERE'

		gifts_grinch?: number

		/**
		 * The key is formatted as `xmas2019_<lobby>`, with `lobby` being something like `PTL_3` or `MAIN_LOBBY_37`.
		 */
		[key: `xmas2019_${string}`]: boolean

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
			christmas?: Record<
				number,
				{
					adventRewards?: Record<`day${number}`, number>
					presents?: Record<string, true>
				}
			>
			easter?: Record<
				number,
				{
					duelsWinsAchievement: number
					mainlobby_egghunt_reward: boolean
					[key: `mainlobby_egghunt_${number}_${number}_${number}`]: boolean
				}
			>
			anniversary?: Record<
				number,
				{
					anniversaryNPCVisited: number[]
					anniversaryNPCProgress: number
				}
			>
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
		hasTheHotPotato?: boolean

		/** An admin-only field. */
		motionTrackerEnabled?: boolean
		/** An admin-only field. */
		motionTrackerDebug?: boolean

		/** Seems like an admin-only field. */
		[key: `players_flagged_new_${string}`]: number
		/** Seems like an admin-only field. */
		disableSendAll?: boolean

		/**
		 * An array of dashed admin player UUIDs. A superset of
		 * `aprilFoolsStaffClicked_-1`.
		 */
		'aprilFoolsPlayerClicked_-1'?: string[]
		/**
		 * An array of dashed admin player UUIDs. A subset of
		 * `aprilFoolsPlayerClicked_-1`, even though all the players there are staff.
		 */
		'aprilFoolsStaffClicked_-1'?: string[]
	}
}
