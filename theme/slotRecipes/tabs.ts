import { defineSlotRecipe } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/react/anatomy'

export const tabsSlotRecipe = defineSlotRecipe({
	slots: tabsAnatomy.keys(),
	className: 'chakra-tabs',
	base: {
		root: {},
		list: {},
		trigger: {
			_icon: {
				fontSize: '2.4rem',
			},
		},
		content: {},
		indicator: {},
	},

	variants: {
		variant: {
			header: {
				root: {
					maxW: { base: '22rem', md: '26rem' },
					borderRadius: 'md',
					border: '1px solid',
					borderColor: 'secondary.border',
					p: 'xxxxs',
					w: 'fit-content',
				},
				list: {
					'--tabs-height': '3.6rem',
					minH: 'var(--tabs-height)',
				},
				indicator: {
					borderRadius: 'xs',
					bg: 'primary.gray',
				},
				trigger: {
					color: 'white',
					opacity: 0.8,
					transition: 'all 0.15s ease',
					_selected: {
						opacity: 1,
					},
				},
			},
		},
	},
})
