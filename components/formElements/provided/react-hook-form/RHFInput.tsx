'use client'

import dynamic from 'next/dynamic'
import { useController } from 'react-hook-form'
import { InputProps } from '../../Input'
import { FieldProps } from '@/components/ui/field'
import { RHFBaseInputProps } from './types'
const Input = dynamic(() => import('@/components/formElements/Input'), {
	ssr: false,
})

export type RHFInputProps = RHFBaseInputProps<InputProps> & FieldProps

export default function RHFInput({
	controlOptions,
	label,
	helperText,
	isRequired = false,
	inputProps,
}: RHFInputProps) {
	const {
		field,
		fieldState: { invalid, error },
	} = useController(controlOptions)

	return (
		<Input
			size={{ base: 'md', md: 'lg' }}
			invalid={invalid}
			required={isRequired}
			label={label}
			errorText={error?.message}
			helperText={!error?.message ? helperText : undefined}
			{...field}
			{...inputProps}
		/>
	)
}
