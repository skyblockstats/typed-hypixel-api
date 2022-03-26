import { SkyBlockProfileMember } from './_profile_member'

export interface SkyBlockCommunityUpgrades {
	currently_upgrading: null
	upgrade_states: {
		upgrade: 'minion_slots' | 'island_size' | 'guests_count' | 'coins_allowance' | 'coop_slots'
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
	last_save?: string
	banking?: SkyBlockBanking
}