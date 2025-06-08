import { User } from '@/api/common/User'
import { create } from 'zustand'

interface SessionState {
	user: User | null
	isAuthorized: boolean
	isLoading: boolean
	setUser: (user: User | null) => void
	logout: () => void
}

export const useSessionStore = create<SessionState>(set => ({
	user: null,
	isAuthorized: false,
	isLoading: true,
	setUser: user =>
		set(state => ({
			user,
			isAuthorized: !!user,
			isLoading: false,
		})),
	logout: () =>
		set({
			user: null,
			isAuthorized: false,
			isLoading: false,
		}),
}))
