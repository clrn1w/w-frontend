import { useCallback } from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { useForm } from 'react-hook-form'
import { useChangeEmailMutation } from '@/api/account/mutations'
import { ChangeEmailRequest } from '@/api/account/types'
import { Button } from '@chakra-ui/react'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'

export default function ChangeMailModal({
	...props
}: Omit<BaseModalProps, 'children'>) {
	const { mutateAsync, isPending } = useChangeEmailMutation()
	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm<any>({
		defaultValues: {
			email: '',
		},
	})

	const onSubmit = useCallback(async (values: ChangeEmailRequest) => {
		await mutateAsync({ values: values })
	}, [])

	return (
		<BaseModal
			title='Смена почты'
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
			<RHFInput
				label='Новая почта'
				isRequired={true}
				controlOptions={{
					control,
					name: 'email',
				}}
			/>
		</BaseModal>
	)
}
