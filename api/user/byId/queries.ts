import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { Id } from '@/api/common/Id'
import { UserReponse, UserWishesResponse } from './types'

export function useUser<T = UserReponse>(
	params: Id,
	options?: UseQueryOptions<
		UserReponse,
		FetchError,
		T,
		MainApiQueryKeys['user']['byId']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.user.byId(params),
		retry: false,
		...options,
	})
}

export function useUserWishes<T = UserWishesResponse>(
	params: Id,
	options?: UseQueryOptions<
		UserWishesResponse,
		FetchError,
		T,
		MainApiQueryKeys['user']['byIdWishes']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.user.byIdWishes(params),
		retry: false,
		...options,
	})
}
