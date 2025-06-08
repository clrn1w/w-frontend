import { api } from '../instance.api'
import {
	ChangeAvatarRequest,
	ChangeEmailRequest,
	ChangeInfoRequest,
	ChangePasswordRequest,
	ChangeSettingsRequest,
	MeResponse,
} from './types'

export const getMe = async () => {
	const response = await api.get<MeResponse>('account/me')

	return response
}

export const changeSettings = async (body: ChangeSettingsRequest) => {
	const response = await api.patch('account/settings', body)

	return response
}

export const changePassword = async (body: ChangePasswordRequest) => {
	const response = await api.patch('account/password', body)

	return response
}

export const changeEmail = async (body: ChangeEmailRequest) => {
	const response = await api.patch('account/email', body)

	return response
}

export const changeInfo = async (body: ChangeInfoRequest) => {
	const response = await api.patch('account/info', body)

	return response
}

export const changeAvatar = async (body: ChangeAvatarRequest) => {
	const formData = new FormData()
	formData.append('avatar', body.avatar)

	const response = await api.patch('account/avatar', formData)

	return response
}

export const deleteAvatar = async () => {
	const response = await api.delete('account/avatar')

	return response
}
