import { SkyBlockProfile } from './_profile'

export interface SkyBlockProfilesResponse {
	success: true
	profiles: (SkyBlockProfile & { cute_name: string })[]
}
