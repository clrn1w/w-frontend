import { useCallback, useState } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { useCreateWishMutation } from '@/api/wish/all/mutations'
import { Wish } from '@/api/common/Wish'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import { useUploadWishImageMutation } from '@/api/wish/byId/mutations'
import { useFileDropzone } from '@/hooks/useFileDropzone'
import GalleryIcon from '../icons/GalleryIcon'

export default function CreateWishModal({
	...props
}: Omit<BaseModalProps, 'children'>) {
	const { mutateAsync: createWishMutation } = useCreateWishMutation()
	const { mutateAsync: uploadWishImageMutation } = useUploadWishImageMutation()

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
	} = useForm<any>({
		defaultValues: {
			title: '',
			description: '',
			link: '',
			price: '',
		},
	})

	const onSubmit = useCallback(
		async (values: Wish) => {
			try {
				const wishResponse = await createWishMutation({
					values: { ...values, price: Number(values.price) },
				})

				if (!wishResponse || !wishResponse.id) {
					throw new Error('Invalid response from createWishMutation')
				}

				console.log('Created wish:', wishResponse)

				const wishId = wishResponse.id

				await uploadWishImageMutation({
					values: {
						id: wishId,
						image: selectedFile,
					},
				})

				setSelectedFile(null)
			} catch (error) {
				console.error('Error creating wish or uploading image:', error)
			}
		},
		[createWishMutation, uploadWishImageMutation, selectedFile]
	)

	return (
		<BaseModal
			title='Создать желание'
			footer={
				<Button disabled={!isDirty} onClick={handleSubmit(onSubmit)} size='lg'>
					Создать
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
						label='Ссылка на товар'
						isRequired
						controlOptions={{
							control,
							name: 'link',
						}}
					/>
					<RHFInput
						label='Цена'
						isRequired
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
