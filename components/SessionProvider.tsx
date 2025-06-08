import { useEffect } from 'react'
import { useMe } from '@/api/account/queries'
import { useSessionStore } from '@/store/session'

interface SessionProviderProps {
	children: React.ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
	const { data, isLoading } = useMe()
	const setUser = useSessionStore(state => state.setUser)

	useEffect(() => {
		if (!isLoading) {
			setUser(data || null)
		}
	}, [data, isLoading, setUser])

	return <>{children}</>
}
