import { User } from '../common/User'

export type MeResponse = User

export interface ChangeSettingsRequest {
	isTwoFactorAuth: boolean
}

export interface ChangePasswordRequest {
	currentPassword: string
	newPassword: string
}

export interface ChangeEmailRequest {
	email: string
}

export interface ChangeInfoRequest {
	username?: string
	displayName: string
	bio: string
}

export interface ChangeAvatarRequest {
	avatar: File
}
