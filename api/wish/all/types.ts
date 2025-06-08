import { Wish } from '@/api/common/Wish'

export interface CreateWishRequest {
	title: string
	description?: string
	link?: string | null
	price?: number | null
	isPrivate?: boolean
}

export type CreateWishResponse = Wish
