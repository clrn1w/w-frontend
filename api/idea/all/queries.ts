import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { IdeasResponse } from './types'
import { FetchError } from '@/utils/fetch/fetchError'
import { MainApiQueryKeys, mainApiQueryKeys } from '@/api/queryKeys'

export function useIdeas<T = IdeasResponse>(
	options?: UseQueryOptions<
		IdeasResponse,
		FetchError,
		T,
		MainApiQueryKeys['idea']['all']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.idea.all,
		retry: false,
		...options,
	})
}
