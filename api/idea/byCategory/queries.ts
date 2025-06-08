import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { IdeasByCategoryRequest, IdeasByCategoryResponse } from './types'

export function useIdeasByCategory<T = IdeasByCategoryResponse>(
	params: IdeasByCategoryRequest,
	options?: UseQueryOptions<
		IdeasByCategoryResponse,
		FetchError,
		T,
		MainApiQueryKeys['idea']['byCategory']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.idea.byCategory(params),
		retry: false,
		...options,
	})
}
