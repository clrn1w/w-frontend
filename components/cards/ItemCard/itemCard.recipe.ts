import { defineSlotRecipe } from '@chakra-ui/react'

export const itemCardSlotRecipe = defineSlotRecipe({
	slots: ['link', 'wrapper', 'image', 'title', 'price', 'badge'],
	base: {
		link: {
			w: 'fit-content',
		},
		wrapper: {
			maxW: { base: '16rem', md: '24rem' },
			w: '100%',
			display: 'flex',
			flexDirection: 'column',
			gap: 'xxxs',
			position: 'relative',
		},
		image: {
			w: '100%',
			h: '100%',
			maxH: { base: '20rem', md: '28.6rem' },
			borderRadius: 'md',
			bg: 'secondary.gray',
		},
		title: {
			textStyle: 'body_medium',
			color: 'primary.white',
		},
		price: {
			textStyle: 'body_regular',
			color: 'secondary.white',
		},
	},
})
