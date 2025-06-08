import { useCallback } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { useChangePasswordMutation } from '@/api/account/mutations'
import { ChangePasswordRequest } from '@/api/account/types'
import { Box, Button } from '@chakra-ui/react'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'

export default function ChangePasswordModal({
	...props
}: Omit<BaseModalProps, 'children'>) {
	const { mutateAsync, isPending } = useChangePasswordMutation()
	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm<any>({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
		},
	})

	const onSubmit = useCallback(async (values: ChangePasswordRequest) => {
		await mutateAsync({ values: values })
	}, [])

	return (
		<BaseModal
			title='Новый пароль'
			footer={
				<Button
					disabled={!isDirty}
					onClick={handleSubmit(onSubmit)}
					loading={isPending}
					size='lg'
					w='100%'
				>
					Сохранить
				</Button>
			}
			size='sm'
			{...props}
		>
			<Box display='flex' flexDirection='column' gap='sm'>
				<RHFInput
					label='Старый пароль'
					isRequired={true}
					controlOptions={{
						control,
						name: 'oldPassword',
					}}
					inputProps={{
						type: 'password',
					}}
				/>
				<RHFInput
					label='Новый пароль'
					isRequired={true}
					controlOptions={{
						control,
						name: 'newPassword',
					}}
					inputProps={{
						type: 'password',
					}}
				/>
			</Box>
		</BaseModal>
	)
}
