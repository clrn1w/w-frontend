import { create } from 'zustand'

interface TwoFactorAuthState {
	is2FAEnabled: boolean
	toggle2FA: () => void
}

export const useTwoFactorAuthStore = create<TwoFactorAuthState>(set => ({
	is2FAEnabled: false,

	toggle2FA: () => set(state => ({ is2FAEnabled: !state.is2FAEnabled })),
}))
