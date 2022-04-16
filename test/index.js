const util = require('util')
const { promises: fs } = require('fs')
const { request } = require('../build/index.js')

const exec = util.promisify(require('child_process').exec)

if (!process.env.API_KEY)
	// if there's no hypixel keys in env, run dotenv
	require('dotenv').config()

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
		await exec('npx tsc test/_test_data.ts --noEmit --esModuleInterop --downlevelIteration --skipLibCheck --lib DOM.Iterable,ESNext,DOM')
	} catch (err) {
		console.error(err.stdout)
		throw new Error(err)
	}
	console.log('\x1b[32m%s\x1b[0m', '✓', 'Passed', typeName)
}

console.log('\x1b[1m%s\x1b[0m', 'Running tests. This will take a few minutes, be patient!')
const startTime = Date.now();

(async () => {

	await testData('PlayerDataResponse', await request('player', {
		uuid: 'ed32a0660fc948378dcf8ed717d1188c',
		key: process.env.API_KEY
	}, true))
	await testData('PlayerDataResponse', await request('player', {
		uuid: 'f7c77d999f154a66a87dc4a51ef30d19',
		key: process.env.API_KEY
	}, true))
	await testData('PlayerDataResponse', await request('player', {
		uuid: 'c3b9402747b1433d8b20cd54c7da3f5d',
		key: process.env.API_KEY
	}, true))
	await testData('PlayerDataResponse', await request('player', {
		uuid: '16751f79c0b14e53a0b590d31fc1d80d',
		key: process.env.API_KEY
	}, true))
	await testData('PlayerDataResponse', await request('player', {
		uuid: 'b876ec32e396476ba1158438d83c67d4',
		key: process.env.API_KEY
	}, true))
	await testData('PlayerDataResponse', await request('player', {
		uuid: '20934ef9488c465180a78f861586b4cf',
		key: process.env.API_KEY
	}, true))




	await testData('SkyBlockPlayerBingoResponse', await request('skyblock/bingo', {
		key: process.env.API_KEY,
		uuid: 'e471665f71014891bef337c8d22cf04b'
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '26398ec782e5440cbcbb94c58b8b60a2',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '16751f79c0b14e53a0b590d31fc1d80d',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '974b2a9e0d6d41819dd18a05fb228965',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: 'ac01147ed01a47d1b5777b31ccf5e616',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: 'e07f44d84fb8424cbb0b15dc542266f6',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '94c2516fe3224cec87084902314728e6',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '1b524fe49c5c4fe599840bdd7c790bf0',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: 'fb178c95d152459eb8dcefd127894e38',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockProfilesResponse', await request('skyblock/profiles', {
		uuid: '20934ef9488c465180a78f861586b4cf',
		key: process.env.API_KEY
	}, true))

	await testData('SkyBlockProfileResponse', await request('skyblock/profile', {
		profile: '64722047f9b34e69b67b76a62351eb05',
		key: process.env.API_KEY
	}, true))

	await testData('SkyBlockRequestAuctionResponse', await request('skyblock/auction', {
		profile: 'ba8c4d8746274656b9c5c9578ccef419',
		key: process.env.API_KEY
	}, true))
	await testData('SkyBlockActiveAuctionsResponse', await request('skyblock/auctions', {
		page: 0
	}, true))
	await testData('SkyBlockRecentlyEndedAuctionsResponse', await request('skyblock/auctions_ended', {}, true))

	await testData('SkyBlockNewsResponse', await request('skyblock/news', { key: process.env.API_KEY }, true))
	await testData('SkyBlockBazaarResponse', await request('skyblock/bazaar', {}, true))

	await testData('GuildResponse', await request('guild', {
		key: process.env.API_KEY,
		name: 'SkyComm'
	}, true))

	await testData('RankedSkywarsResponse', await request('player/ranked/skywars', {
		key: process.env.API_KEY,
		uuid: 'a91bd7ca5d4b4846990bf4393727f279'
	}, true))

	await testData('GamesInformationResponse', await request('resources/games', {}, true))
	await testData('ChallengesResponse', await request('resources/challenges', {}, true))
	await testData('AchievementsResponse', await request('resources/achievements', {}, true))
	await testData('GuildAchievementsResponse', await request('resources/guilds/achievements', {}, true))
	await testData('VanityPetsResponse', await request('resources/vanity/pets', {}, true))
	await testData('VanityCompanionsResponse', await request('resources/vanity/companions', {}, true))
	await testData('SkyBlockBingoResponse', await request('resources/skyblock/bingo', {}, true))
	await testData('BoostersResponse', await request('boosters', { key: process.env.API_KEY }, true))
	await testData('CurrentPlayerCountsResponse', await request('counts', { key: process.env.API_KEY }, true))
	await testData('LeaderboardsResponse', await request('leaderboards', { key: process.env.API_KEY }, true))
	await testData('PunishmentStatsResponse', await request('punishmentstats', { key: process.env.API_KEY }, true))
	await testData('QuestsResponse', await request('resources/quests', {}, true))


	console.log('\x1b[32m%s\x1b[0m', '✓ Everything passed.', 'Good job! :)')

	console.log('Took', Math.round((Date.now() - startTime) / 1000), 'seconds')
})()
