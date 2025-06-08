import { createQueryKeys } from '@lukemorales/query-key-factory'
import { Id } from '../common/Id'
import { getWish } from './byId/requests'
import { getReservedWishes } from './reserved/requests'
import { getCompletedWishes } from './completed/requests'

export default createQueryKeys('wish', {
	byId: (params: Id) => ({
		queryKey: [params],
		queryFn: () => getWish(params),
	}),
	reserved: {
		queryKey: null,
		queryFn: getReservedWishes,
	},
	completed: {
		queryKey: null,
		queryFn: getCompletedWishes,
	},
})
