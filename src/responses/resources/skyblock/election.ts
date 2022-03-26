export interface Candidate {
    key: string
    name: string
    perks: {
        name: string
        description: string
    }[]
}

export interface SkyBlockElectionResponse {
    success: true
    lastUpdated: number
    mayor: Candidate & {
        election: {
            year: number
            candidates: (Candidate & {
                votes: number
            })[]
        }
    }
    current?: {
        year: number
        candidates: (Candidate & {
            votes: number
        })[]
    }
}