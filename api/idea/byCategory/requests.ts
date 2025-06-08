import { api } from '@/api/instance.api'
import { IdeasByCategoryRequest, IdeasByCategoryResponse } from './types'

export const getIdeasByCategory = async ({
	category,
}: IdeasByCategoryRequest) => {
	const response = await api.get<IdeasByCategoryResponse>(
		`idea/category/${category}`
	)

	return response
}
