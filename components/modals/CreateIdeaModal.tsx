import { useCallback, useState } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { useCreateIdeaMutation } from '@/api/idea/all/mutations'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import { CreateIdeaRequest } from '@/api/idea/all/types'
import { useUploadIdeaImageMutation } from '@/api/idea/byId/mutations'
import { useFileDropzone } from '@/hooks/useFileDropzone'
import GalleryIcon from '../icons/GalleryIcon'

export default function CreateIdeaModal({
	...props
}: Omit<BaseModalProps, 'children'>) {
	const { mutateAsync: createIdeaMutation } = useCreateIdeaMutation()
	const { mutateAsync: uploadIdeaImageMutation } = useUploadIdeaImageMutation()

	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	const onDrop = useCallback(
		async (acceptedFiles: File[], fileRejections: any) => {
			if (acceptedFiles.length > 0) {
				const file = acceptedFiles[0]
				setSelectedFile(file)
			}
		},
		[]
	)

	const { getRootProps, getInputProps } = useFileDropzone({
		accept: {
			'image/jpeg': ['.jpg', '.jpeg'],
			'image/png': ['.png'],
		},
		onDrop,
	})

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm({
		defaultValues: {
			title: '',
			description: '',
			link: '',
			price: '',
		},
	})

	const onSubmit = useCallback(
		async (values: CreateIdeaRequest) => {
			try {
				const request: CreateIdeaRequest = {
					title: values.title,
					description: values.description || undefined,
					link: values.link || undefined,
					price: Number(values.price),
				}
				const ideaResponse = await createIdeaMutation({ values: request })

				if (!ideaResponse || !ideaResponse.id) {
					throw new Error('Invalid response from createIdeaMutation')
				}

				if (selectedFile) {
					await uploadIdeaImageMutation({
						values: {
							id: ideaResponse.id,
							image: selectedFile,
						},
					})
				}

				setSelectedFile(null)
			} catch (error) {
				console.error('Error creating idea or uploading image:', error)
			}
		},
		[createIdeaMutation, uploadIdeaImageMutation, selectedFile]
	)

	return (
		<BaseModal
			title='Создать идею'
			footer={
				<Button disabled={!isDirty} onClick={handleSubmit(onSubmit)} size='lg'>
					Создать
				</Button>
			}
			size='md'
			{...props}
		>
			<Box display='flex' gap='sm' alignItems='center'>
				<Box
					bg='secondary.gray'
					border='1px dashed'
					borderColor='secondary.border'
					borderRadius='1.2rem'
					maxW='36rem'
					maxH='36rem'
					w='full'
					h='36rem'
					display='flex'
					gap='1rem'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					textAlign='center'
					{...getRootProps()}
				>
					<input {...getInputProps()} />
					{selectedFile ? (
						<Image
							src={URL.createObjectURL(selectedFile)}
							alt='uploaded'
							objectFit='cover'
							w='full'
							h='full'
							borderRadius='1.2rem'
						/>
					) : (
						<>
							<GalleryIcon w='6.4rem' h='6.4rem' />
							<Text color='secondary.white'>
								Перетащите изображение или нажмите для загрузки
							</Text>
							<Text color='secondary.white'>JPG, PNG, не более 3 МБ</Text>
						</>
					)}
				</Box>
				<Box display='flex' flexDirection='column' gap='sm' w='full'>
					<RHFInput
						label='Название'
						isRequired
						controlOptions={{
							control,
							name: 'title',
						}}
					/>
					<RHFInput
						label='Описание'
						controlOptions={{
							control,
							name: 'description',
						}}
					/>
					<RHFInput
						label='Ссылка на товар'
						controlOptions={{
							control,
							name: 'link',
						}}
					/>
					<RHFInput
						label='Цена'
						controlOptions={{
							control,
							name: 'price',
						}}
					/>
				</Box>
			</Box>
		</BaseModal>
	)
}
