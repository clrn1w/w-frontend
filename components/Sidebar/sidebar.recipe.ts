import { defineSlotRecipe } from '@chakra-ui/react'

export const sidebarSlotRecipe = defineSlotRecipe({
	slots: ['wrapper', 'item'],
	base: {
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
		},
		item: {
			color: 'white',
			opacity: 0.5,
			transition: 'opacity 0.15s ease',
			_hover: {
				textDecoration: 'none',
				opacity: 1,
			},
			_active: {
				opacity: 1,
			},
			_focus: {
				outline: 0,
			},
		},
	},
	variants: {
		size: {
			md: {
				item: {
					textStyle: 'body_medium',
					gap: 'xxxs',
					py: '0.6rem',
					_icon: {
						fontSize: '2.4rem',
					},
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})
