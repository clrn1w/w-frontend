import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { MeResponse } from './types'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '../queryKeys'

export function useMe<T = MeResponse>(
	options?: UseQueryOptions<
		MeResponse,
		FetchError,
		T,
		MainApiQueryKeys['account']['me']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.account.me,
		retry: false,
		...options,
	})
}
