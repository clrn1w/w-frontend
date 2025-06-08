import { api } from '@/api/instance.api'
import {
	CopyIdeaResponse,
	EditIdeaRequest,
	EditIdeaResponse,
	IdeaResponse,
	UploadIdeaImageRequest,
} from './types'
import { Id } from '@/api/common/Id'

export const getIdea = async ({ id }: Id) => {
	const response = await api.get<IdeaResponse>(`idea/${id}`)

	return response
}

export const editIdea = async ({ id, ...body }: EditIdeaRequest) => {
	const response = await api.patch<EditIdeaResponse>(`idea/${id}`, body)

	return response
}

export const uploadIdeaImage = async ({
	id,
	...body
}: UploadIdeaImageRequest) => {
	const formData = new FormData()
	formData.append('image', body.image)

	const response = await api.patch(`idea/${id}/image`, formData)

	return response
}

export const removeIdeaImage = async ({ id }: Id) => {
	const response = await api.delete(`idea/${id}/image`)

	return response
}

export const deleteIdea = async ({ id }: Id) => {
	const response = await api.delete(`idea/${id}`)

	return response
}

export const copyIdea = async ({ id }: Id) => {
	const response = await api.post<CopyIdeaResponse>(`idea/${id}/copy`)

	return response
}
