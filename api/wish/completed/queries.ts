import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { CompletedWishesResponse } from './types'

export function useCompletedWishes<T = CompletedWishesResponse>(
	options?: UseQueryOptions<
		CompletedWishesResponse,
		FetchError,
		T,
		MainApiQueryKeys['wish']['completed']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.wish.completed,
		retry: false,
		...options,
	})
}
