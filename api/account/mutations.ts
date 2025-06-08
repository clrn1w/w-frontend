import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
	ChangePasswordRequest,
	ChangeSettingsRequest,
	ChangeEmailRequest,
	ChangeInfoRequest,
	ChangeAvatarRequest,
} from './types'
import {
	changePassword,
	changeSettings,
	changeEmail,
	changeInfo,
	changeAvatar,
	deleteAvatar,
} from './requests'
import delay from '@/helpers/delay'
import { mainApiQueryKeys } from '../queryKeys'
import { toaster } from '@/components/ui/toaster'

export const useChangeSettingsMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: ChangeSettingsRequest }) =>
			delay(changeSettings(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Настройки изменены',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useChangePasswordMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: ChangePasswordRequest }) =>
			delay(changePassword(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Пароль был изменен',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useChangeEmailMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: ChangeEmailRequest }) =>
			delay(changeEmail(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Email изменен',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useChangeInfoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: ChangeInfoRequest }) =>
			delay(changeInfo(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Информация была изменена',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useChangeAvatarMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: ChangeAvatarRequest }) =>
			delay(changeAvatar(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Изображение профиля было изменено',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useDeleteAvatarMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => delay(deleteAvatar()),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Изображение профиля удалено',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
