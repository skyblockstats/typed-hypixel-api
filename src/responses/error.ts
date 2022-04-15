export interface InvalidApiKeyResponse {
	success: false
	cause: 'Invalid API Key'
}
export interface ThrottleResponse {
	success: false
	cause: 'Key throttle'
	throttle: true
	global: boolean
}
export interface MissingFieldResponse {
	success: false
	cause: string
}
export interface MalformedUuidResponse {
	success: false
	cause: 'Malformed UUID'
}
export interface NoBingoDataResponse {
	success: false
	cause: 'No bingo data could be found'
}
