import { useMutation } from '@tanstack/react-query'
import delay from '@/helpers/delay'
import { toaster } from '@/components/ui/toaster'
import { Id } from '@/api/common/Id'
import { deleteUser } from './requests'

export const useDeleteUserMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(deleteUser(values)),
		onSuccess: () => {
			toaster.create({
				description: 'Пользователь удален',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
