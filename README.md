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

## Contributing

### Adding an endpoint

Each endpoint is in a separate file in the `src/responses/` directory. You can look at other endpoints as a reference on how yours should look. If you add one, first export it from `src/responses/index.ts` and then in `src/index.ts` add it to the `Requests` interface. Also, this isn't necessary but it's recommended that you add JSDoc comments to explain what each field is for. Finally, add a test in `test/index.js` and do `yarn test`.

### Updating an endpoint

If you change an endpoint, simply find the relevant file in the `src/responses/` directory and add a new type. Then, run `yarn test` to make sure it's correct.

### JSDocs

If you update or add a JSDoc (i.e. the /** */ comments), please use proper grammar and add a period at the end of your sentences. The comments should also be easy to understand for someone who does not have deep knowledge of the API. If you don't understand a field or you don't feel like it, you don't have to write anything for it.
