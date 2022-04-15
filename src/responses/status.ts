export interface OnlineStatusResponse {
	success: true
	uuid: string
	session: {
		online: boolean
		gameType: string
		mode: string
		map: string
	}
}
