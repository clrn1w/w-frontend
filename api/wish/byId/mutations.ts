import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
	EditWishRequest,
	UploadWishImageRequest,
	PrivacyWishRequest,
	CompletionWishRequest,
} from './types'
import {
	editWish,
	deleteWish,
	uploadWishImage,
	reserveWish,
	privacyWish,
	completionWish,
	removeWishImage,
} from './requests'
import delay from '@/helpers/delay'
import { Id } from '@/api/common/Id'
import { mainApiQueryKeys } from '@/api/queryKeys'
import { toaster } from '@/components/ui/toaster'

export const useEditWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: EditWishRequest }) =>
			delay(editWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Желание отредактировано',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useDeleteWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(deleteWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Желание удалено',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useUploadWishImageMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: UploadWishImageRequest }) =>
			delay(uploadWishImage(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
		},
	})
}

export const useRemoveWishImageMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(removeWishImage(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
		},
	})
}

export const useReserveWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(reserveWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Вы зарезервировали желание',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const usePrivacyWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: PrivacyWishRequest }) =>
			delay(privacyWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
		},
	})
}

export const useCompletionWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: CompletionWishRequest }) =>
			delay(completionWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Желание исполнено',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
