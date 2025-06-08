import { useMutation } from '@tanstack/react-query'
import { CreateIdeaRequest } from './types'
import { createIdea } from './requests'
import delay from '@/helpers/delay'
import { toaster } from '@/components/ui/toaster'

export const useCreateIdeaMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: CreateIdeaRequest }) =>
			delay(createIdea(values)),
		onSuccess: () => {
			toaster.create({
				description: 'Идея создана',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
