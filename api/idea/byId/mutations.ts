import { useMutation } from '@tanstack/react-query'
import { EditIdeaRequest, UploadIdeaImageRequest } from './types'
import {
	copyIdea,
	deleteIdea,
	editIdea,
	removeIdeaImage,
	uploadIdeaImage,
} from './requests'
import delay from '@/helpers/delay'
import { Id } from '@/api/common/Id'
import { toaster } from '@/components/ui/toaster'

export const useEditIdeaMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: EditIdeaRequest }) =>
			delay(editIdea(values)),
		onSuccess: () => {
			toaster.create({
				description: 'Идея отредактирована',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useUploadIdeaImageMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: UploadIdeaImageRequest }) =>
			delay(uploadIdeaImage(values)),
	})
}

export const useRemoveIdeaImageMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(removeIdeaImage(values)),
	})
}

export const useDeleteIdeaMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(deleteIdea(values)),
		onSuccess: () => {
			toaster.create({
				description: 'Идея удалена',
				type: 'success',
				duration: 2500,
			})
		},
	})
}

export const useCopyIdeaMutation = () => {
	return useMutation({
		mutationFn: ({ values }: { values: Id }) => delay(copyIdea(values)),
		onSuccess: () => {
			toaster.create({
				description: 'Идея добавлена в ваш список',
				type: 'success',
				duration: 2500,
			})
		},
	})
}
