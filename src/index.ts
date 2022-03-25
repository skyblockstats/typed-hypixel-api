import { InvalidApiKeyResponse, MalformedUuidResponse, MissingFieldResponse, ThrottleResponse } from './responses/error'
import { SkyBlockCollectionsResponse } from './responses/resources/skyblock/collections'
import { SkyBlockSkillsResponse } from './responses/resources/skyblock/skills'
import { SkyBlockItemsResponse } from './responses/resources/skyblock/items'
import { SkyBlockProfilesResponse } from './responses/skyblock/profiles'
import { ApiKeyInformationResponse } from './responses/api'
import { PlayerDataResponse } from './responses/player'
import { fetch } from 'undici'
import { FriendsResponse } from './responses/friends'
import { RecentGamesResponse } from './responses/recentgames'
import { OnlineStatusResponse } from './responses/status'
import { SkyBlockElectionResponse } from './responses/resources/skyblock/election'

/** The base url of the Hypixel API with a trailing slash */
const BASE_URL = 'https://api.hypixel.net/'


type Response<
    R,
    H extends Record<string, string | number> = {
        'RateLimit-Limit': number,
        'RateLimit-Remaining': number,
        'Ratelimit-Reset': number
    }
    >
    = { data: R, headers: H }

async function request(path: 'api'): Promise<Response<ApiKeyInformationResponse | InvalidApiKeyResponse | ThrottleResponse>>
async function request(path: 'player', options: {
    uuid: string,
    key: string
}): Promise<Response<PlayerDataResponse | MissingFieldResponse | InvalidApiKeyResponse | ThrottleResponse>>
async function request(path: 'resources/skyblock/collections'): Promise<Response<SkyBlockCollectionsResponse>>
async function request(path: 'resources/skyblock/skills'): Promise<Response<SkyBlockSkillsResponse>>
async function request(path: 'resources/skyblock/items'): Promise<Response<SkyBlockItemsResponse>>
async function request(path: 'resources/skyblock/election'): Promise<Response<SkyBlockElectionResponse>>

async function request(path: 'skyblock/profiles', options: {
    uuid: string
    key: string
}): Promise<Response<SkyBlockProfilesResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>>
async function request(path: 'friends', options: {
    uuid: string
    key: string
}): Promise<Response<FriendsResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>>
async function request(path: 'recentgames', options: {
    uuid: string
    key: string
}): Promise<Response<RecentGamesResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>>
async function request(path: 'status', options: {
    uuid: string
    key: string
}): Promise<Response<OnlineStatusResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>>


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
