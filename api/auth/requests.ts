import { api } from '../instance.api'
import { LoginRequest, LoginResponse, RegisterRequest } from './types'

export const register = async (body: RegisterRequest) => {
	const response = await api.post('auth/register', body)

	return response
}

export const login = async (body: LoginRequest) => {
	const response = await api.post<LoginResponse>('auth/login', body)

	return response
}

export const logout = async () => {
	const response = await api.post('auth/logout')

	return response
}
