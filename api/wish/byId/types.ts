import { Id } from '@/api/common/Id'
import { Wish } from '@/api/common/Wish'

export type WishResponse = Wish

export interface EditWishRequest extends Id {
	title: string
	description?: string
	link?: string
	price?: string
	isPrivate?: boolean
}

export type EditWishResponse = Wish

export interface UploadWishImageRequest extends Id {
	image: File | null
}

export interface PrivacyWishRequest extends Id {
	isPrivate: boolean
}

export interface CompletionWishRequest extends Id {
	isCompleted: boolean
}
