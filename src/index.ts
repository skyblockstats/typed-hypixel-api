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

export interface Requests {
    'api': {
        options: {}
        response: Response<ApiKeyInformationResponse | InvalidApiKeyResponse | ThrottleResponse>
    }
    'player': {
        options: {
            uuid: string
            key: string
        }
        response: Response<PlayerDataResponse | MissingFieldResponse | InvalidApiKeyResponse | ThrottleResponse>
    }
    'resources/skyblock/collections': {
        options: {}
        response: Response<SkyBlockCollectionsResponse>
    }
    'resources/skyblock/skills': {
        options: {}
        response: Response<SkyBlockSkillsResponse>
    }
    'resources/skyblock/items': {
        options: {}
        response: Response<SkyBlockItemsResponse>
    }
    'resources/skyblock/election': {
        options: {}
        response: Response<SkyBlockElectionResponse>
    }
    'skyblock/profiles': {
        options: {
            uuid: string
            key: string
        }
        response: Response<SkyBlockProfilesResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>
    }
    'friends': {
        options: {
            uuid: string
            key: string
        }
        response: Response<FriendsResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>
    }
    'recentgames': {
        options: {
            uuid: string
            key: string
        }
        response: Response<RecentGamesResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>
    }
    'status': {
        options: {
            uuid: string
            key: string
        }
        response: Response<OnlineStatusResponse | MissingFieldResponse | InvalidApiKeyResponse | MalformedUuidResponse | ThrottleResponse>
    }
}


export const request = async<P extends keyof Requests>(path: P, options: Requests[P]['options']): Promise<Requests[P]['response']> => {
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
        data: data as any,
        headers: headers as any
    }
}
