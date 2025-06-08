import { defineSlotRecipe } from '@chakra-ui/react'
import { switchAnatomy } from '@chakra-ui/react/anatomy'

export const switchSlotRecipe = defineSlotRecipe({
	slots: switchAnatomy.keys(),
	className: 'chakra-switch',
	base: {
		root: {
			display: 'inline-flex',
			alignItems: 'center',
			position: 'relative',
			verticalAlign: 'middle',
			'--switch-x': {
				base: 'var(--switch-diff)',
				_rtl: 'calc(var(--switch-diff) * -1)',
			},
		},

		control: {
			display: 'inline-flex',
			flexShrink: 0,
			justifyContent: 'flex-start',
			alignItems: 'center',
			cursor: 'switch',
			borderRadius: 'full',
			position: 'relative',
			width: 'var(--switch-width)',
			height: 'var(--switch-height)',
			transition: 'background-color 0.15s',
			_disabled: {
				opacity: 0.5,
				cursor: 'not-allowed',
			},
			_invalid: {},
		},

		thumb: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: 0,
			transitionProperty: 'translate',
			transitionDuration: 'fast',
			borderRadius: 'inherit',
			_checked: {
				translate: 'var(--switch-x) 0',
			},
		},
	},

	variants: {
		variant: {
			solid: {
				control: {
					bg: 'secondary.gray',
					boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
					_checked: {
						bg: 'primary.green',
					},
				},
				thumb: {
					bg: 'white',
					width: 'var(--switch-height)',
					height: 'var(--switch-height)',
					scale: 0.8,
					boxShadow: 'sm',
					_checked: {
						bg: 'white',
					},
				},
			},
		},

		size: {
			md: {
				root: {
					'--switch-width': '4rem',
					'--switch-height': '2.4rem',
				},
			},
			lg: {
				root: {
					'--switch-width': '5rem',
					'--switch-height': '3rem',
				},
			},
		},
	},

	defaultVariants: {
		variant: 'solid',
		size: 'lg',
	},
})
