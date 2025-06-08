import { defineSlotRecipe } from '@chakra-ui/react'
import { dialogAnatomy } from '@chakra-ui/react/anatomy'

export const dialogSlotRecipe = defineSlotRecipe({
	className: 'chakra-dialog',
	slots: dialogAnatomy.keys(),
	base: {
		content: {
			bg: 'primary.gray',
			borderRadius: '4rem',
			gap: '2.4rem',
		},
		header: {
			p: 0,
			w: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
		title: {
			textStyle: 'title2_bold',
		},
		body: {
			p: 0,
			textStyle: 'body_medium',
		},
		footer: {
			p: 0,
			w: '100%',
			textStyle: 'body_regular',
		},
		closeTrigger: {
			w: '3.2rem',
			h: '3.2rem',
			p: '0.4rem',
			insetInlineEnd: '2rem',
			top: '2rem',
		},
	},
	variants: {
		size: {
			full: {
				content: {
					p: '1.6rem 1rem',
				},
			},
			sm: {
				content: {
					p: '3rem',
					// minW: '64rem',
					maxW: '64rem',
					w: '100%',
				},
				positioner: {
					p: '1.6rem',
				},
			},
			md: {
				content: {
					p: '3rem',
					maxW: '96rem',
				},
				positioner: {
					p: '1.6rem',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})
