import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { IdeaResponse } from './types'
import { FetchError } from '@/utils/fetch/fetchError'
import { mainApiQueryKeys, MainApiQueryKeys } from '@/api/queryKeys'
import { Id } from '@/api/common/Id'

export function useIdea<T = IdeaResponse>(
	params: Id,
	options?: UseQueryOptions<
		IdeaResponse,
		FetchError,
		T,
		MainApiQueryKeys['idea']['byId']['queryKey']
	>
) {
	return useQuery({
		...mainApiQueryKeys.idea.byId(params),
		retry: false,
		...options,
	})
}
