import {
	inferQueryKeyStore,
	mergeQueryKeys,
} from '@lukemorales/query-key-factory'
import account from './account/queryKeys'
import idea from './idea/queryKeys'
import wish from './wish/queryKeys'
import user from './user/queryKeys'

export const mainApiQueryKeys = mergeQueryKeys(account, idea, wish, user)

export type MainApiQueryKeys = inferQueryKeyStore<typeof mainApiQueryKeys>
