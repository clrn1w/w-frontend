import { api } from '@/api/instance.api'
import { ReservedWishesResponse } from './types'

export const getReservedWishes = async () => {
	const response = await api.get<ReservedWishesResponse>('wish/reserved')

	return response
}
