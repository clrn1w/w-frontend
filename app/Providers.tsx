'use client'

import {
	isServer,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'

import { Provider } from '@/components/ui/provider'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from '@/components/SessionProvider'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 60 * 1000,
			},
		},
	})
}

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()

		return browserQueryClient
	}
}

export default function Providers({ children }: { children: ReactNode }) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<SessionProvider>
				<Provider forcedTheme='dark'>
					<Toaster />
					{children}
				</Provider>
			</SessionProvider>
		</QueryClientProvider>
	)
}
