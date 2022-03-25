export interface FriendsResponse {
    success: true
    uuid: string
    records: {
        _id: string
        uuidSender: string
        uuidReceiver: string
        started: number
    }[]
}