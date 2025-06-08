import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
	className: 'chakra-button',
	base: {
		border: 0,
		height: 'auto',
		gap: 'xxxxs',
		_hover: {
			opacity: 0.9,
		},
		_focusVisible: {
			outline: 0,
		},
		_expanded: {
			opacity: 0.9,
		},
	},

	variants: {
		size: {
			sm: {
				h: 'fit-content',
				p: 'xxs',
				borderRadius: 'full',
				_icon: {
					w: '2.4rem',
					h: '2.4rem',
					fontSize: '2.4rem',
				},
			},
			md: {
				h: 'fit-content',
				px: 'sm',
				py: 'xxs',
				borderRadius: 'md',
				_icon: {
					w: '2.4rem',
					h: '2.4rem',
					fontSize: '2.4rem',
				},
			},
			lg: {
				h: 'fit-content',
				px: 'md',
				py: 'sm',
				borderRadius: 'xl',
				_icon: {
					w: '2.4rem',
					h: '2.4rem',
					fontSize: '2.4rem',
				},
			},
		},

		variant: {
			solid: {
				bg: 'primary.blue',
				color: 'white',
				textStyle: 'body_medium',
				_hover: {
					bg: 'primary.blue',
				},
				_expanded: {
					bg: 'primary.blue',
				},
			},
			subtle: {
				bg: 'secondary.gray',
				textStyle: 'body_medium',
				_hover: {
					bg: 'secondary.gray',
				},
				_expanded: {
					bg: 'secondary.gray',
				},
			},
			outline: {
				border: '1px solid var(--chakra-colors-secondary-border)',
				color: 'white',
				_hover: {
					bg: 'secondary.gray',
				},
				_expanded: {
					bg: 'secondary.gray',
				},
			},
			ghost: {
				color: 'white',
				_hover: {
					bg: 'secondary.gray',
				},
				_expanded: {
					bg: 'secondary.gray',
				},
			},
		},
	},

	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
})
