import { defineSlotRecipe } from '@chakra-ui/react'
import { toastAnatomy } from '@chakra-ui/react/anatomy'

export const toastSlotRecipe = defineSlotRecipe({
	className: 'chakra-toast',
	slots: toastAnatomy.keys(),
	base: {
		root: {
			w: '100%',
			p: 'sm',
			gap: 'xs',
			borderRadius: 'xs',
			alignItems: 'flex-start',
			'&[data-type=success]': {
				bg: 'primary.green',
				color: 'white',
			},
			'&[data-type=error]': {
				bg: 'primary.red',
				color: 'white',
			},
			'&[data-type=info]': {
				bg: 'secondary.gray',
				color: 'white',
			},
		},
		title: {
			textStyle: 'body_medium',
		},
		description: {
			opacity: 1,
			textStyle: 'body_regular',
		},
		indicator: {
			display: 'none',
		},
		closeTrigger: {
			w: '2.4rem',
			h: '2.4rem',
			top: '1.6rem',
			right: '1.6rem',
			cursor: 'pointer',
		},
	},
})
