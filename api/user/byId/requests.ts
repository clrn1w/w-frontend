import { api } from '@/api/instance.api'
import { Id } from '@/api/common/Id'
import { UserReponse, UserWishesResponse } from './types'

export const getUser = async ({ id }: Id) => {
	const response = await api.get<UserReponse>(`user/${id}`)

	return response
}

export const getUserWishes = async ({ id }: Id) => {
	const response = await api.get<UserWishesResponse>(`user/${id}/wishes`)

	return response
}

export const deleteUser = async ({ id }: Id) => {
	const response = await api.delete(`user/delete/${id}`)

	return response
}
