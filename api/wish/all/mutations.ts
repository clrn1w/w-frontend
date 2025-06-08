import delay from '@/helpers/delay'
import { createWish } from './requests'
import { CreateWishRequest } from './types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mainApiQueryKeys } from '@/api/queryKeys'
import { toaster } from '@/components/ui/toaster'

export const useCreateWishMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ values }: { values: CreateWishRequest }) =>
			delay(createWish(values)),
		onSuccess: async () => {
			await queryClient.invalidateQueries(mainApiQueryKeys.account.me)
			toaster.create({
				description: 'Желание создано',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
