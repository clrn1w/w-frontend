import { Id } from './Id'
import { Metadata } from './Metadata'
import { UserType } from './UserType'

export interface User extends Id, Metadata {
	username: string
	email: string
	displayName: string
	bio: string | null
	avatar: string | null
	backgroundImage: string | null
	userType: UserType
	isEmailVerified: boolean
	isTwoFactorAuth: boolean
}
