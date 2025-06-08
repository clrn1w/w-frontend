import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { ReservedWishesResponse } from './types'

export function useReservedWishes<T = ReservedWishesResponse>(
	options?: UseQueryOptions<
		ReservedWishesResponse,
		FetchError,
		T,
		MainApiQueryKeys['wish']['reserved']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.wish.reserved,
		retry: false,
		...options,
	})
}
