import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { WishResponse } from './types'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { Id } from '@/api/common/Id'

export function useWish<T = WishResponse>(
	params: Id,
	options?: UseQueryOptions<
		WishResponse,
		FetchError,
		T,
		MainApiQueryKeys['wish']['byId']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.wish.byId(params),
		retry: false,
		...options,
	})
}
