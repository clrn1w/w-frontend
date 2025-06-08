import React from 'react'
import BaseModal, { BaseModalProps } from './BaseModal'
import { Button, DialogTrigger } from '@chakra-ui/react'
import Input from '../formElements/Input'

export interface ShareModalProps extends Omit<BaseModalProps, 'children'> {
	url: string
}

export default function ShareModal({ url, ...props }: ShareModalProps) {
	const handleCopy = () => {
		navigator.clipboard.writeText(url)
	}

	return (
		<BaseModal
			size='sm'
			title='Поделиться'
			footer={
				<>
					<DialogTrigger asChild>
						<Button size='lg' variant='subtle'>
							Отмена
						</Button>
					</DialogTrigger>
					<Button size='lg' onClick={handleCopy}>
						Скопировать
					</Button>
				</>
			}
			{...props}
		>
			<Input label='Ссылка' readOnly value={url} />
		</BaseModal>
	)
}
