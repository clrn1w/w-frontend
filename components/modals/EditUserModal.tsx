import { useState, useCallback } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { Box, Button } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
import { useFileDropzone } from '@/hooks/useFileDropzone'
import { useSessionStore } from '@/store/session'
import {
	useChangeAvatarMutation,
	useChangeInfoMutation,
	useDeleteAvatarMutation,
} from '@/api/account/mutations'
import { ChangeInfoRequest } from '@/api/account/types'
import TrashIcon from '../icons/TrashIcon'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import GalleryIcon from '../icons/GalleryIcon'

export default function EditUserModal({
	...props
}: Omit<BaseModalProps, 'children'>) {
	const { user } = useSessionStore()
	const { mutateAsync: changeInfoMutate, isPending: isChangeInfoPending } =
		useChangeInfoMutation()
	const { mutateAsync: deleteAvatarMutate, isPending: isDeleteAvatarPending } =
		useDeleteAvatarMutation()
	const { mutateAsync: changeAvatarMutate, isPending: isChangeAvatarPending } =
		useChangeAvatarMutation()

	const [newAvatar, setNewAvatar] = useState<File | null>(null)
	const [avatarRemoved, setAvatarRemoved] = useState<boolean>(false)

	const onDrop = (acceptedFiles: File[]) => {
		console.log(acceptedFiles)
		const newImage = acceptedFiles[0] as any
		newImage.preview = URL.createObjectURL(newImage)
		setNewAvatar(newImage)
	}

	const { getRootProps, getInputProps } = useFileDropzone({
		accept: {
			'image/jpeg': ['.jpg', '.jpeg'],
			'image/png': ['.png'],
			'image/gif': ['.gif'],
		},
		onDrop,
		noDrag: true,
	})

	const {
		control,
		handleSubmit,
		formState: { isDirty },
		getValues,
	} = useForm<any>({
		defaultValues: {
			username: user.username,
			displayName: user.displayName,
			bio: '',
		},
	})

	const onSubmit = useCallback(
		async (values: ChangeInfoRequest) => {
			const currentValues = getValues()

			if (currentValues !== values) {
				await changeInfoMutate({ values })
			}

			if (newAvatar) {
				await changeAvatarMutate({ values: { avatar: newAvatar } })
				setNewAvatar(null)
			}

			if (avatarRemoved) {
				await deleteAvatarMutate()
				setAvatarRemoved(false)
				setNewAvatar(null)
			}
		},
		[
			newAvatar,
			avatarRemoved,
			changeInfoMutate,
			changeAvatarMutate,
			deleteAvatarMutate,
			user,
			getValues,
		]
	)

	const avatarSrc = newAvatar
		? newAvatar.preview
		: !avatarRemoved
		? user.avatar
			? user.avatar
			: null
		: null

	return (
		<BaseModal
			onExitComplete={() => {
				setNewAvatar(null)
				setAvatarRemoved(false)
			}}
			title='Общие сведения'
			footer={
				<Button
					disabled={!isDirty && !newAvatar && !avatarRemoved}
					onClick={handleSubmit(onSubmit)}
					loading={
						isChangeInfoPending ||
						isDeleteAvatarPending ||
						isChangeAvatarPending
					}
					w='100%'
					size='lg'
				>
					Сохранить
				</Button>
			}
			size='sm'
			{...props}
		>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				gap='sm'
				mb='xs'
			>
				<Box {...getRootProps()}>
					<input {...getInputProps()} />
					<Button variant='subtle' size='sm'>
						<GalleryIcon />
					</Button>
				</Box>
				<Box w='100px' h='100px' asChild>
					<Avatar fontSize='5rem' size='full' src={avatarSrc} />
				</Box>
				<Button
					variant='subtle'
					size='sm'
					onClick={() => {
						setAvatarRemoved(true)
						setNewAvatar(null)
					}}
					disabled={!user.avatar && !newAvatar}
				>
					<TrashIcon />
				</Button>
			</Box>
			<Box display='flex' flexDirection='column' gap='sm'>
				<RHFInput
					label='Имя'
					isRequired
					controlOptions={{
						control,
						name: 'displayName',
					}}
				/>
				<RHFInput
					label='Никнейм'
					isRequired
					controlOptions={{
						control,
						name: 'username',
					}}
				/>
			</Box>
		</BaseModal>
	)
}
