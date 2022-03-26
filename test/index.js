import util from 'util'
import { promises as fs } from 'fs'
import { request } from '../build/index.js'

const exec = util.promisify((await import('child_process')).exec)

if (!process.env.API_KEY)
	// if there's no hypixel keys in env, run dotenv
	(await import('dotenv')).config()

if (!process.env.API_KEY)
	throw new Error('No API key found in env')

async function writeTestData(typeName, data) {
	const writingData = `import { ${typeName} } from '../src'

const typedData: ${typeName} = ${JSON.stringify(data, null, '\t')}`

	await fs.writeFile('test/_test_data.ts', writingData)
}

async function testData(typeName, data) {
	await writeTestData(typeName, data.data)
	try {
		await exec('npx tsc test/_test_data.ts --noEmit --esModuleInterop --downlevelIteration --skipLibCheck')
	} catch (err) {
		console.error(err.stdout)
		throw new Error(err)
	}
}

console.log('ok doing tsc')

await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
	uuid: '26398ec782e5440cbcbb94c58b8b60a2',
	key: process.env.API_KEY
}, true))

console.log('Passed :)')

