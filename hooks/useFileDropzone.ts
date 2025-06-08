import { DataSizes } from '@/constants/bytes'
import { useCallback } from 'react'
import {
	useDropzone,
	FileRejection,
	DropEvent,
	DropzoneOptions,
} from 'react-dropzone'

interface UseFileDropzoneProps extends Omit<DropzoneOptions, 'onDrop'> {
	accept: { [key: string]: string[] }
	onDrop: (
		acceptedFiles: File[],
		fileRejections: FileRejection[],
		event: DropEvent
	) => void
	maxSize?: number
}

export const useFileDropzone = ({
	accept,
	onDrop,
	maxSize = 3 * DataSizes.mbytes,
	...props
}: UseFileDropzoneProps) => {
	const onDropCallback = useCallback(onDrop, [onDrop])

	const dropzoneOptions: DropzoneOptions = {
		accept,
		onDrop: onDropCallback,
		maxSize,
		...props,
	}

	return useDropzone(dropzoneOptions)
}
