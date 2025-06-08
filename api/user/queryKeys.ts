import { createQueryKeys } from '@lukemorales/query-key-factory'

import { getUser, getUserWishes } from './byId/requests'
import { Id } from '../common/Id'

export default createQueryKeys('user', {
	byId: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getUser(params),
	}),
	byIdWishes: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getUserWishes(params),
	}),
})
