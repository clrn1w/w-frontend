'use client'

import React, { useCallback } from 'react'
import BaseModal from './BaseModal'
import { Box, Button, chakra, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import RHFInput from '../formElements/provided/react-hook-form/RHFInput'
import { useRegisterMutation } from '@/api/auth/mutations'
import { RegisterRequest } from '@/api/auth/types'

export default function RegisterModal() {
	const router = useRouter()
	const { mutateAsync, isPending, isError, isSuccess, error } =
		useRegisterMutation()

	const {
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm<any>({
		defaultValues: {
			displayName: '',
			email: '',
			password: '',
		},
	})

	const onSubmit = useCallback(async (values: RegisterRequest) => {
		await mutateAsync({ values: values })
	}, [])

	return (
		<BaseModal
			onExitComplete={() => router.push('/')}
			defaultOpen
			title={isSuccess ? 'Осталось проверить почту' : 'Регистрация'}
			footer={
				isSuccess ? (
					<Button size='lg' w='100%' asChild>
						<NextLink href='/'>На главную</NextLink>
					</Button>
				) : (
					<Box
						w='100%'
						borderTop='1px solid'
						borderColor='secondary.border'
						pt='0.8rem'
						display='flex'
						gap='1.6rem'
						justifyContent='center'
						alignItems='center'
					>
						<Text>У меня уже есть аккаунт</Text>
						<Button variant='subtle' asChild>
							<NextLink href='login'>Войти</NextLink>
						</Button>
					</Box>
				)
			}
			size='sm'
		>
			{!isSuccess ? (
				<chakra.form
					display='flex'
					flexDirection='column'
					gap='1rem'
					onSubmit={handleSubmit(onSubmit)}
				>
					<RHFInput
						label='Имя'
						isRequired
						controlOptions={{
							control,
							name: 'displayName',
						}}
						inputProps={{
							autoFocus: true,
						}}
					/>
					<RHFInput
						label='Электронная почта'
						isRequired
						controlOptions={{
							control,
							name: 'email',
						}}
						inputProps={{
							type: 'email',
						}}
					/>
					<RHFInput
						label='Пароль'
						isRequired
						controlOptions={{
							control,
							name: 'password',
						}}
						inputProps={{
							type: 'password',
						}}
					/>
					<Button
						type='submit'
						size='lg'
						flex='1'
						disabled={!isDirty}
						loading={isPending}
					>
						Зарегистрироваться
					</Button>
					<Text color='secondary.white' textStyle='signature'>
						Нажимая на кнопку, вы принимаете{' '}
						<Link href='/docs/terms.pdf' textDecoration='underline'>
							пользовательское соглашение
						</Link>{' '}
						и даёте согласие на обработку ваших персональных данных на условиях{' '}
						<Link href='/docs/confidential.pdf' textDecoration='underline'>
							политики конфиденциальности
						</Link>
					</Text>
				</chakra.form>
			) : (
				<Text color='secondary.white' textAlign='center'>
					Мы выслали на вашу почту письмо с кнопкой. Перейдите по ней и вы сразу
					же будете авторизованы!
				</Text>
			)}
		</BaseModal>
	)
}
