export interface TntGamesStats {
	coins: number

	bloodwizard_explode?: number
	bloodwizard_regen?: number
	new_bloodwizard_explode?: number
	new_bloodwizard_regen?: number
	new_bloodwizard_explode_legacy?: number
	new_bloodwizard_regen_legacy?: number

	firewizard_explode?: number
	firewizard_regen?: number
	new_firewizard_explode?: number
	new_firewizard_regen?: number
	new_firewizard_explode_legacy?: number
	new_firewizard_regen_legacy?: number
	new_firewizard_assists?: number
	new_firewizard_kills?: number
	new_firewizard_damage_taken?: number
	new_firewizard_deaths?: number
	new_firewizard_healing?: number

	toxicwizard_regen?: number
	toxicwizard_explode?: number
	new_toxicwizard_explode?: number
	new_toxicwizard_regen?: number

	witherwizard_explode?: number
	witherwizard_regen?: number
	new_witherwizard_explode?: number
	new_witherwizard_regen?: number

	icewizard_explode?: number
	icewizard_regen?: number
	new_icewizard_regen?: number
	new_icewizard_explode?: number

	kineticwizard_regen?: number
	kineticwizard_explode?: number
	new_kineticwizard_explode?: number
	new_kineticwizard_regen?: number

	// bow spleef
	deaths_bowspleef: number
	spleef_doublejump?: number
	spleef_repulse?: number
	spleef_triple?: number
	tags_bowspleef: number
	wins_bowspleef?: number
	new_spleef_tripleshot: number
	new_spleef_double_jumps: number
	new_spleef_repulsor: number
	new_spleef_repulsor_legacy?: number
	new_spleef_double_jumps_legacy?: number
	new_spleef_exlosive_dash?: number

	// wizards
	kills_capture: number
	deaths_capture: number
	wins_capture: number
	capture_class?: string
	assists_capture?: number
	points_capture?: number
	kinetic_healing_capture?: number
	air_time_capture?: number
	wizards_selected_class?: string
	tnt_wizards_extra_time?: number

	// tnt run
	doublejump_tntrun?: number
	wins_tntrun?: number
	record_tntrun: number
	new_tntrun_double_jumps: number
	deaths_tntrun?: number
	new_tntrun_speed_potions?: number
	new_tntrun_slowness_potions?: number
	new_tntrun_double_jumps_legacy?: number

	// pvp run
	record_pvprun: number
	kills_pvprun: number
	wins_pvprun?: number
	new_pvprun_double_jumps: number
	new_pvprun_regeneration?: number
	new_pvprun_notoriety?: number
	new_pvprun_fortitude?: number
	deaths_pvprun?: number
	new_pvprun_double_jumps_legacy?: number

	// tnt tag
	kills_tntag?: number
	tag_speed?: number
	new_tntag_speedy: number
	tag_slowitdown?: number
	tag_blastprotection?: number
	tag_speeditup?: number
	wins_tntag?: number
	new_tag_suit?: string

	packages: string[]

	selected_hat: string

	votes_Heather?: number

	run_potions_splashed_on_players: number
	winstreak: number
	new_double_jump_effect?: string
	wins: number
	new_selected_hat?: string
	new_active_particle_effect?: string
	flags: {
		enable_explosive_dash: boolean
		give_dj_feather: boolean
		show_tip_holograms: boolean
		show_tntrun_actionbar_info: boolean
		show_tnttag_actionbar_info: boolean
		show_wizards_actionbar_info: boolean
		show_wizards_cooldown_notifications: boolean
	}
	lastTourneyAd: number
}
