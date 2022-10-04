import { SkyBlockProfileMember } from './_profile_member'

export type SkyBlockCommunityUpgradeName =
	| 'minion_slots'
	| 'island_size'
	| 'guests_count'
	| 'coins_allowance'
	| 'coop_slots'

export interface SkyBlockCommunityUpgrades {
	currently_upgrading?: null | {
		upgrade: SkyBlockCommunityUpgradeName
		new_tier: number
		start_ms: number
		who_started: string
	}
	upgrade_states?: {
		upgrade: SkyBlockCommunityUpgradeName
		tier: number
		started_ms: number
		started_by: string
		claimed_ms: number
		claimed_by: string
		fasttracked: boolean
	}[]
}

export interface SkyBlockBanking {
	balance: number
	transactions: {
		amount: number
		timestamp: number
		action: 'DEPOSIT' | 'WITHDRAW'
		initiator_name: 'Bank Interest' | string
	}[]
}

export interface SkyBlockProfile {
	profile_id: string
	members: Record<string, SkyBlockProfileMember>
	community_upgrades?: SkyBlockCommunityUpgrades
	/**
	 * This can be either a string, or a UNIX timestamp. If it's a string, it
	 * looks like Mar 21, 2022 9:58:42 PM.
	 * */
	last_save?: string | number
	banking?: SkyBlockBanking | {}
	/**
	 * The "cute name" of the profile.
	 */
	cute_name?: string
	/**
	 * Whether this is the active profile for the user.
	 */
	selected?: boolean
	game_mode?: 'bingo' | 'island' | 'ironman'
}
