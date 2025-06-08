import { createQueryKeys } from '@lukemorales/query-key-factory'
import { getIdea } from './byId/requests'
import { Id } from '../common/Id'
import { IdeasByCategoryRequest } from './byCategory/types'
import { getIdeasByCategory } from './byCategory/requests'
import { getIdeas } from './all/requests'

export default createQueryKeys('idea', {
	all: {
		queryKey: null,
		queryFn: getIdeas,
	},
	byId: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getIdea(params),
	}),
	byCategory: (params: IdeasByCategoryRequest) => ({
		queryKey: [params],
		queryFn: () => getIdeasByCategory(params),
	}),
})
