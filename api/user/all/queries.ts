import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FetchError } from '@/utils/fetch/fetchError'
import { MainApiQueryKeys, mainApiQueryKeys } from '@/api/queryKeys'
import { User } from '@/api/common/User'

export function useUsers<T = User[]>(
	options?: UseQueryOptions<
		User[],
		FetchError,
		T,
		MainApiQueryKeys['user']['all']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.user.all,
		retry: false,
		...options,
	})
}
