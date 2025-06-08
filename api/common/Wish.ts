import { Id } from './Id'
import { Metadata } from './Metadata'

export interface Wish extends Id, Metadata {
	title: string
	description: string
	link: string | null
	price: number | null
	image: string | null
	isPrivate: boolean
	isCompleted: boolean
	isReserved: boolean
	reservedByUserId: string | null
	userId: string
}
