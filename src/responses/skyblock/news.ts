export interface SkyBlockNewsResponse {
	success: true
	items: {
		item: {
			material: string
			data?: number
		}
		link: string
		/** The human-readable date of when the update was released (for example 1st March 2022). */
		text: string
		/** The title of the update */
		title: string
	}[]
}