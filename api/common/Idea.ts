import { Id } from './Id'
import { Metadata } from './Metadata'

export interface Idea extends Id, Metadata {
	userId: boolean
	title: string
	description: string | null
	link: string | null
	price: number | null
	image: string | null
}
