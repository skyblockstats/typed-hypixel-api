# Typed Hypixel API

A library to make requests to the Hypixel API, but with TypeScript to help you avoid mistakes. This library does not modify or process any data returned, that's up to you.

I aim to cover the entire Hypixel API, and the tests automatically check our types with the Hypixel API every day so new fields can be added quickly.

## Usage

Make a request:
```ts
import hypixel from 'typed-hypixel-api'

const res = await hypixel.request(
	'player',
	{
		key: 'your-api-key',
		uuid: '6536bfed869548fd83a1ecd24cf2a0fd'
	}
)

if (res.data.success)
	console.log(res.data.player.playername)
```

Typed wrapper function (for example to retry on errors or handle ratelimits):
```ts
export let sendApiRequest = async<P extends keyof hypixel.Requests>(path: P, options: hypixel.Requests[P]['options']): Promise<hypixel.Requests[P]['response']['data']> => {
	let response: hypixel.Requests[P]['response']
	try {
		response = await hypixel.request(
			path,
			options
		)
	} catch (e) {
		await sleep(1000)
		return await sendApiRequest(path, options)
	}

	return response.data
}
```
