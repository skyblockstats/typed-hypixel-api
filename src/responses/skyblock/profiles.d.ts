import { ProfileMember } from './_profile_member'

export interface SkyBlockProfilesResponse {
    success: true
    profiles: {
        profile_id: string
        members: Record<string, ProfileMember>
        cute_name: string
    }[]
}
