import { createQueryKeys } from '@lukemorales/query-key-factory'
import { getMe } from './requests'

export default createQueryKeys('account', {
	me: {
		queryKey: null,
		queryFn: getMe,
	},
})
