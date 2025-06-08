import { defineRecipe } from '@chakra-ui/react'

export const inputRecipe = defineRecipe({
	className: 'chakra-input',
	base: {
		width: '100%',
		minWidth: 0,
		outline: 0,
		border: '1px solid transparent',
		position: 'relative',
		appearance: 'none',
		textAlign: 'start',
		borderRadius: 'xs',
		_disabled: {
			layerStyle: 'disabled',
		},
		height: 'var(--input-height)',
		minW: 'var(--input-height)',
		_invalid: {
			borderColor: 'primary.red',
		},
	},

	variants: {
		size: {
			md: {
				'--input-height': '5.8rem',
				pt: 'lg',
				px: 'sm',
				pb: 'xs',
				fontSize: 'sm',
				fontWeight: 500,
			},
			lg: {
				'--input-height': '7rem',
				pt: 'xl',
				px: 'md',
				pb: 'xxs',
				fontSize: 'md',
				fontWeight: 500,
			},
		},

		variant: {
			floating: {
				background: 'primary.grayLight',
			},
		},
	},

	defaultVariants: {
		variant: 'floating',
		size: 'lg',
	},
})
