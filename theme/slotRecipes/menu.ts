import { defineSlotRecipe } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/react/anatomy'

export const menuSlotRecipe = defineSlotRecipe({
	className: 'chakra-menu',
	slots: menuAnatomy.keys(),
	base: {
		item: { transition: 'opacity 0.15s ease' },
	},

	variants: {
		variant: {
			subtle: {
				content: {
					bg: 'secondary.gray',
				},
				item: {
					_highlighted: {
						opacity: 0.7,
						bg: 'none',
					},
				},
			},
		},

		size: {
			md: {
				content: {
					borderRadius: 'lg',
					p: 'xxxs',
				},
				item: {
					gap: '0.4rem',
					textStyle: 'body_medium',
					p: '0.6rem',
					_icon: {
						fontSize: '2.4rem',
					},
				},
			},
		},
	},

	defaultVariants: {
		size: 'md',
		variant: 'subtle',
	},
})
