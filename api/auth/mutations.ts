import { useMutation, useQueryClient } from '@tanstack/react-query'

import delay from '@/helpers/delay'
import { login, logout, register } from './requests'
import { LoginRequest, RegisterRequest } from './types'
import { mainApiQueryKeys } from '../queryKeys'
import { useTwoFactorAuthStore } from '@/store/2fa'
import { useRouter } from 'next/navigation'
import { useSessionStore } from '@/store/session'

export const useRegisterMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: RegisterRequest }) =>
			delay(register(values)),
	})
}

export const useLoginMutation = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const toggle2FA = useTwoFactorAuthStore(state => state.toggle2FA)
	const is2FAEnabled = useTwoFactorAuthStore(state => state.is2FAEnabled)

	return useMutation({
		mutationFn: ({ values }: { values: LoginRequest }) => delay(login(values)),
		onSuccess: async (data: any) => {
			if (data.message) {
				toggle2FA()
			} else {
				await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
				router.push('/')
				if (is2FAEnabled) {
					toggle2FA()
				}
			}
		},
	})
}

export const useLogoutMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => delay(logout()),
		onSuccess: async () => {
			useSessionStore.getState().logout()
		},
	})
}
