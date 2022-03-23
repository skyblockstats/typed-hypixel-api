import { fetch } from 'undici'
import { ApiKeyInformationResponse } from './responses/api'
import { InvalidApiKeyResponse, MissingFieldResponse, ThrottleResponse } from './responses/error'
import { PlayerDataResponse } from './responses/player'

/** The base Url of the Hypixel API with a trailing slash */
const BASE_URL = 'https://api.hypixel.net/'


type Response<
    R,
    H extends Record<string, string | number> = {
        'X-RateLimit-Limit': number,
        'X-RateLimit-Remaining': number,
        'X-Ratelimit-Reset': number
    }
    >
    = { data: R, headers: H }

async function request(path: 'api'): Promise<Response<ApiKeyInformationResponse | InvalidApiKeyResponse | ThrottleResponse>>;
async function request(path: 'player', options: {
    uuid: string,
    key: string
}): Promise<Response<PlayerDataResponse | MissingFieldResponse | InvalidApiKeyResponse | ThrottleResponse>>;

async function request(path: string, options?: Record<string, string>): Promise<Response<any, {}>> {
    const requestHeaders = new Headers()
    const requestParameters: Record<string, string> = {}

    if (options)
        for (const [optionName, optionValue] of Object.entries(options)) {
            if (optionName === 'key') {
                requestHeaders.set('X-Api-Key', optionValue)
            } else {
                requestParameters[optionName] = optionValue
            }
        }

    const res = await fetch(`${BASE_URL}${path}?` + new URLSearchParams(requestParameters), {
        headers: requestHeaders
    })
    const data = await res.json()
    const headers: Record<string, string | number> = {}
    for (const [name, value] of res.headers) {
        try {
            headers[name] = parseInt(value)
        } catch {
            headers[name] = value
        }
    }

    return {
        data,
        headers
    }
}

export { request }

request('player', { key: '1', uuid: 'a' }).then(r => r.data.success ? r.data.player.levelingReward_9999 : {})