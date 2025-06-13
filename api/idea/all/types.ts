import { Idea } from '@/api/common/Idea'

export interface CreateIdeaRequest {
	title: string
	description?: string
	link?: string
	price?: number | null
	category?: string
}

export type CreateIdeaResponse = Idea

export type IdeasResponse = Idea[]
