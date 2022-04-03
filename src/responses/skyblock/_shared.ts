export type ITEM_RARITY = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' | 'SPECIAL'

export interface Inventory {
	/** This seems to always be 0. */
	type: 0
	/**
	 * Gzipped and NBT-Encoded inventory data.
	 */
	data: string
}
