import { api } from '@/api/instance.api'
import { CreateWishRequest, CreateWishResponse } from './types'

export const createWish = async (body: CreateWishRequest) => {
	const response = await api.post<CreateWishResponse>('wish', body)

	return response
}
