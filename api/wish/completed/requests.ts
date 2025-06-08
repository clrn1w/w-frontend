import { api } from '@/api/instance.api'
import { CompletedWishesResponse } from './types'

export const getCompletedWishes = async () => {
	const response = await api.get<CompletedWishesResponse>('wish/completed')

	return response
}
