import {
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	Field,
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
	label?: React.ReactNode
	helperText?: React.ReactNode
	errorText?: React.ReactNode
	optionalText?: React.ReactNode
	invalid?: boolean
}

export default function Input({
	label,
	helperText,
	errorText,
	placeholder = '',
	invalid = false,
	size = 'lg',
	...props
}: InputProps) {
	return (
		<Field.Root size={size} invalid={invalid}>
			<ChakraInput
				size={size}
				className='peer'
				placeholder={placeholder}
				{...props}
			/>
			{label && <Field.Label>{label}</Field.Label>}
			{helperText && <Field.HelperText>{helperText}</Field.HelperText>}
			{errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
		</Field.Root>
	)
}
