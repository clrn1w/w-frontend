import { ReactNode } from 'react'
import type { UseControllerProps } from 'react-hook-form'

export type RHFInputControllerOptions = UseControllerProps<any>

export interface RHFBaseInputProps<InputProps> {
	controlOptions: RHFInputControllerOptions
	inputProps?: InputProps
	label?: string
	helperText?: string
	isRequired?: boolean
}
