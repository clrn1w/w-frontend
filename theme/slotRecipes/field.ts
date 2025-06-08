import { defineSlotRecipe } from '@chakra-ui/react'
import { fieldAnatomy } from '@chakra-ui/react/anatomy'

export const fieldSlotRecipe = defineSlotRecipe({
	className: 'chakra-field',
	slots: fieldAnatomy.keys(),
	base: {
		requiredIndicator: {},
		root: {
			gap: '1rem',
			borderRadius: 'xs',
			// border: '1px solid',
			// borderColor: 'transparent',
			_invalid: {
				focusRingColor: 'primary.red',
				borderColor: 'primary.red',
			},
		},
		label: {
			_invalid: {
				color: 'primary.red',
			},
		},
		errorText: {
			color: 'primary.red',
		},
		helperText: {},
	},
	variants: {
		size: {
			md: {
				label: {
					fontSize: 'xs',
					top: 'xxxs',
					left: 'sm',
					_peerPlaceholderShown: {
						top: 'md',
						fontSize: 'sm',
					},
					_peerFocusVisible: {
						fontSize: 'xs',
						top: 'xxxs',
					},
				},
			},
			lg: {
				label: {
					fontSize: 'sm',
					top: 'xs',
					left: 'md',
					_peerPlaceholderShown: {
						top: '2.3rem',
						fontSize: 'md',
						fontWeight: 500,
					},
					_peerFocusVisible: {
						fontSize: 'sm',
						top: 'xs',
					},
				},
			},
		},
		variant: {
			floating: {
				label: {
					pos: 'absolute',
					color: 'white',
					opacity: 0.64,
					lineHeight: 1.2,
					fontWeight: 500,
					pointerEvents: 'none',
					transition: 'top 0.15s, font-size 0.15s, line-height 0.15s;',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'floating',
		size: 'lg',
	},
})
