import { User } from "../common/User"

export interface RegisterRequest {
	displayName: string
	email: string
	password: string
}

export interface LoginRequest {
	email: string
	password: string
	code?: string
}

export type LoginResponse = User
