'use client'

import React, { useCallback } from 'react'
import BaseModal from './BaseModal'
import { Box, Button, chakra } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import { useTwoFactorAuthStore } from '@/store/2fa'
import { useLoginMutation } from '@/api/auth/mutations'
import { LoginRequest } from '@/api/auth/types'

export default function LoginModal() {
	const router = useRouter()
	const is2FAEnabled = useTwoFactorAuthStore(state => state.is2FAEnabled)
	const { mutateAsync, isPending } = useLoginMutation()

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm<any>({
		defaultValues: {
			email: '',
			password: '',
			code: '',
		},
	})

	const onSubmit = useCallback(async (values: LoginRequest) => {
		await mutateAsync({ values: values })
	}, [])

	return (
		<BaseModal
			onExitComplete={() => router.push('/')}
			defaultOpen
			title={!is2FAEnabled ? 'Вход' : 'Подтверждение входа'}
			footer={
				!is2FAEnabled && (
					<Box
						w='100%'
						borderTop='1px solid'
						borderColor='secondary.border'
						pt='0.8rem'
						display='flex'
						gap='1.6rem'
						justifyContent='center'
					>
						<Button variant='subtle' asChild>
							<NextLink href='reset'>Забыл пароль</NextLink>
						</Button>
						<Button variant='subtle' asChild>
							<NextLink href='register'>Регистрация</NextLink>
						</Button>
					</Box>
				)
			}
			size='sm'
		>
			<chakra.form
				display='flex'
				flexDirection='column'
				gap='1rem'
				onSubmit={handleSubmit(onSubmit)}
			>
				{!is2FAEnabled ? (
					<>
						<RHFInput
							label='Электронная почта'
							isRequired
							controlOptions={{
								control,
								name: 'email',
							}}
							inputProps={{
								autoFocus: true,
								type: 'email',
							}}
						/>
						<RHFInput
							label='Пароль'
							controlOptions={{
								control,
								name: 'password',
							}}
							inputProps={{
								type: 'password',
							}}
						/>
					</>
				) : (
					<RHFInput
						label='Код двухфакторной аутентификации'
						isRequired={true}
						controlOptions={{
							control,
							name: 'code',
						}}
					/>
				)}
				<Button
					type='submit'
					size='lg'
					flex='1'
					disabled={!isDirty}
					loading={isPending}
				>
					{!is2FAEnabled ? 'Войти' : 'Подтвердить'}
				</Button>
			</chakra.form>
		</BaseModal>
	)
}
