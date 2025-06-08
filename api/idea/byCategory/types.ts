import { Idea } from '@/api/common/Idea'

export interface IdeasByCategoryRequest {
	category: string
}

export type IdeasByCategoryResponse = Idea[]
