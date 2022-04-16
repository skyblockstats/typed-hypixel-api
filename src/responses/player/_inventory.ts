export interface GameInventory {
	'DIAMOND_SWORD:0'?: `${number}`
	'DIAMOND_AXE:0'?: `${number}`
	'DIAMOND_CHESTPLATE:0'?: `${number}`
	'DIAMOND_BOOTS:0'?: `${number}`

	'GOLD_SWORD:0'?: `${number}`
	'GOLD_HELMET:0'?: `${number}`
	'GOLD_CHESTPLATE:0'?: `${number}`
	'GOLD_LEGGINGS:0'?: `${number}`
	'GOLD_BOOTS:0'?: `${number}`

	'IRON_SWORD:0'?: `${number}`
	'IRON_AXE:0'?: `${number}`
	'IRON_PICKAXE:0'?: `${number}`
	'IRON_HELMET:0'?: `${number}`
	'IRON_LEGGINGS:0'?: `${number}`
	'IRON_CHESTPLATE:0'?: `${number}`
	'IRON_BOOTS:0'?: `${number}`

	'LEATHER_HELMET:0'?: `${number}`
	'LEATHER_CHESTPLATE:0'?: `${number}`
	'LEATHER_LEGGINGS:0'?: `${number}`
	'LEATHER_BOOTS:0'?: `${number}`

	'CHAINMAIL_CHESTPLATE:0'?: `${number}`

	'WOOD_SWORD:0'?: `${number}`
	'STONE_SWORD:0'?: `${number}`

	'POTION:2'?: `${number}`
	'POTION:3'?: `${number}`
	'POTION:4'?: `${number}`
	'POTION:5'?: `${number}`
	'POTION:8'?: `${number}`
	'POTION:9'?: `${number}`
	'POTION:12'?: `${number}`
	'POTION:13'?: `${number}`
	'POTION:34'?: `${number}`

	'SKULL_ITEM:1'?: `${number}`
	'SKULL_ITEM:2'?: `${number}`
	'SKULL_ITEM:3'?: `${number}`

	'FLINT_AND_STEEL:0'?: `${number}`
	'LAVA_BUCKET:0'?: `${number}`
	'MILK_BUCKET:0'?: `${number}`
	'ANVIL:0'?: `${number}`
	'WOOL:11'?: `${number}`
	'BOW:0'?: `${number}`
	'ARROW:0'?: `${number}`
	'COMPASS:0'?: `${number}`
}

export interface NBTInventory {
	/** This seems to always be 0. */
	type: 0
	/**
	 * NBT bytes.
	 */
	data: number[]
}
