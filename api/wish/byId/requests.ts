import { api } from '@/api/instance.api'
import { Id } from '@/api/common/Id'
import {
	CompletionWishRequest,
	EditWishRequest,
	EditWishResponse,
	PrivacyWishRequest,
	UploadWishImageRequest,
	WishResponse,
} from './types'

export const getWish = async ({ id }: Id) => {
	const response = await api.get<WishResponse>(`wish/${id}`)

	return response
}

export const editWish = async ({ id, ...body }: EditWishRequest) => {
	const response = await api.patch<EditWishResponse>(`wish/${id}`, body)

	return response
}

export const deleteWish = async ({ id }: Id) => {
	const response = await api.delete(`wish/${id}`)

	return response
}

export const uploadWishImage = async ({
	id,
	image,
}: UploadWishImageRequest) => {
	const formData = new FormData()
	formData.append('image', image)

	const response = await api.patch(`wish/${id}/image`, formData)

	return response
}

export const removeWishImage = async ({ id }: Id) => {
	const response = await api.delete(`wish/${id}/image`)

	return response
}

export const reserveWish = async ({ id }: Id) => {
	const response = await api.post(`wish/${id}/reserve`)

	return response
}

export const privacyWish = async ({ id, ...body }: PrivacyWishRequest) => {
	const response = await api.patch(`wish/${id}/privacy`, body)

	return response
}

export const completionWish = async ({
	id,
	...body
}: CompletionWishRequest) => {
	const response = await api.patch(`wish/${id}/completion`, body)

	return response
}
