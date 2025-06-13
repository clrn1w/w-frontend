import { Id } from '@/api/common/Id'
import { User } from '@/api/common/User'
import { api } from '@/api/instance.api'

export const getUsers = async () => {
	const response = await api.get<User[]>('user')

	return response
}
