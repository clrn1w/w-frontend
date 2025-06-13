import { createQueryKeys } from '@lukemorales/query-key-factory'

import { getUser, getUserWishes } from './byId/requests'
import { Id } from '../common/Id'
import { getUsers } from './all/requests'

export default createQueryKeys('user', {
	all: {
		queryKey: null,
		queryFn: getUsers,
	},
	byId: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getUser(params),
	}),
	byIdWishes: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getUserWishes(params),
	}),
})
