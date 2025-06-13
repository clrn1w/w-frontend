import { Id } from '@/api/common/Id'
import { Idea } from '@/api/common/Idea'

export interface EditIdeaRequest extends Id {
	title: string
	description?: string
	link?: string
	price?: number | null
	category?: string
}

export interface UploadIdeaImageRequest extends Id {
	image: File
}

export type IdeaResponse = Idea

export type EditIdeaResponse = Idea

export type CopyIdeaResponse = Idea
