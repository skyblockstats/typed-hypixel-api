export interface RecentGamesResponse {
    success: true
    uuid: string
    games: {
        date: number
        gameType: string
        mode: string
        map: string
        ended: number
    }[]
}