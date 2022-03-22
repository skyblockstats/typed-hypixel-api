export interface InvalidApiKeyResponse {
    success: false,
    cause: 'Invalid API Key'
}
export interface ThrottleResponse {
    success: false,
    cause: 'Key throttle'
}
export interface ThrottleResponse {
    success: false,
    cause: string,
    throttle: boolean,
    global: boolean
}
export interface MissingFieldResponse {
    success: false,
    cause: string
}


