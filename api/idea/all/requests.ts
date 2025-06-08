import { api } from '@/api/instance.api'
import { CreateIdeaRequest, CreateIdeaResponse, IdeasResponse } from './types'

export const createIdea = async (body: CreateIdeaRequest) => {
	const response = await api.post<CreateIdeaResponse>('idea', body)

	return response
}

export const getIdeas = async () => {
	const response = await api.get<IdeasResponse>('idea')

	return response
}
