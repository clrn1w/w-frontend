import { useCallback, useState } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import {
	useEditIdeaMutation,
	useUploadIdeaImageMutation,
	useRemoveIdeaImageMutation,
} from '@/api/idea/byId/mutations'
import { useFileDropzone } from '@/hooks/useFileDropzone'
import GalleryIcon from '../icons/GalleryIcon'
import { Idea } from '@/api/common/Idea'
import { EditIdeaRequest } from '@/api/idea/byId/types'
import { Controller } from 'react-hook-form'
import { defaultSidebar } from '@/constants/sidebarList'

interface EditIdeaModalProps extends Omit<BaseModalProps, 'children'> {
	idea: Idea
}

export default function EditIdeaModal({ idea, ...props }: EditIdeaModalProps) {
	const { mutateAsync: editIdeaMutation } = useEditIdeaMutation()
	const { mutateAsync: uploadIdeaImageMutation } = useUploadIdeaImageMutation()
	const { mutateAsync: removeIdeaImageMutation } = useRemoveIdeaImageMutation()

	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [isImageRemoved, setIsImageRemoved] = useState(false)

	const onDrop = useCallback(
		async (acceptedFiles: File[], fileRejections: any) => {
			if (acceptedFiles.length > 0) {
				const file = acceptedFiles[0]
				setSelectedFile(file)
				setIsImageRemoved(false)
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

	const categoryOptions = defaultSidebar
		.filter(item => item.href.startsWith('/category/'))
		.map(item => ({
			label: item.title,
			value: item.href.replace('/category/', ''),
		}))

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm({
		defaultValues: {
			title: idea.title,
			description: idea.description || '',
			link: idea.link || '',
			price: idea.price || '',
			category: idea.category || '',
		},
	})

	const handleRemoveImage = useCallback(async () => {
		if (idea.image) {
			try {
				await removeIdeaImageMutation({ values: { id: idea.id } })
				setIsImageRemoved(true)
				setSelectedFile(null)
			} catch (error) {
				console.error('Error removing image:', error)
			}
		} else {
			setSelectedFile(null)
		}
	}, [idea.id, idea.image, removeIdeaImageMutation])

	const onSubmit = useCallback(
		async (values: EditIdeaRequest) => {
			try {
				const request: EditIdeaRequest = {
					id: idea.id,
					title: values.title,
					description: values.description || undefined,
					link: values.link || undefined,
					price: Number(values.price),
					category: values.category,
				}
				await editIdeaMutation({ values: request })

				if (selectedFile) {
					await uploadIdeaImageMutation({
						values: {
							id: idea.id,
							image: selectedFile,
						},
					})
				}

				setSelectedFile(null)
			} catch (error) {
				console.error('Error editing idea or uploading image:', error)
			}
		},
		[editIdeaMutation, uploadIdeaImageMutation, selectedFile, idea.id]
	)

	const showExistingImage = idea.image && !isImageRemoved && !selectedFile

	return (
		<BaseModal
			title='Редактировать идею'
			footer={
				<Button
					disabled={!isDirty && !selectedFile && !isImageRemoved}
					onClick={handleSubmit(onSubmit)}
					size='lg'
				>
					Сохранить
				</Button>
			}
			size='md'
			{...props}
		>
			<Box
				display='flex'
				gap='sm'
				alignItems='center'
				flexDirection={{ base: 'column', md: 'row' }}
			>
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
					position='relative'
					{...getRootProps()}
				>
					<input {...getInputProps()} />
					{selectedFile ? (
						<>
							<Image
								src={URL.createObjectURL(selectedFile)}
								alt='uploaded'
								objectFit='cover'
								w='full'
								h='full'
								borderRadius='1.2rem'
							/>
							<Button
								position='absolute'
								top={4}
								right={4}
								colorScheme='red'
								onClick={e => {
									e.stopPropagation()
									handleRemoveImage()
								}}
							>
								Удалить
							</Button>
						</>
					) : showExistingImage ? (
						<>
							<Image
								src={idea.image || ''}
								alt='existing'
								objectFit='cover'
								w='full'
								h='full'
								borderRadius='1.2rem'
							/>
							<Button
								position='absolute'
								top={4}
								right={4}
								colorScheme='red'
								onClick={e => {
									e.stopPropagation()
									handleRemoveImage()
								}}
							>
								Удалить
							</Button>
						</>
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
					<Controller
						name='category'
						control={control}
						rules={{ required: 'Выберите категорию' }}
						render={({ field, fieldState }) => (
							<Box>
								<select
									{...field}
									style={{
										height: '3rem',
										borderRadius: '0.5rem',
										border: fieldState.error
											? '1px solid red'
											: '1px solid #ccc',
										width: '100%',
										padding: '0 1rem',
									}}
								>
									<option value=''>Выберите категорию</option>
									{categoryOptions.map(option => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{fieldState.error && (
									<Text color='red.500' fontSize='sm'>
										{fieldState.error.message}
									</Text>
								)}
							</Box>
						)}
					/>
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
