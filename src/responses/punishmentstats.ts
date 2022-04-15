export interface PunishmentStatsResponse {
	success: true
	/** The number of people who've been banned by Hypixel's anticheat in the past minute. */
	watchdog_lastMinute: number
	/** The number of people who've been banned by staff in the past day. */
	staff_rollingDaily: number
	/** The total number of people who've been banned by Hypixel's anticheat. */
	watchdog_total: number
	/** The number of people who've been banned by Hypixel's anticheat in the past day. */
	watchdog_rollingDaily: number
	/** The total number of people who've been banned by staff. */
	staff_total: number
}
