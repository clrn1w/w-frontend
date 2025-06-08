import { defineTextStyles } from '@chakra-ui/react'

export default defineTextStyles({
	title1_bold: {
		value: {
			fontSize: {
				base: 'lg',
				xl: 'xxl',
			},
			lineHeight: 1.2,
			fontWeight: 700,
		},
	},
	title2_bold: {
		value: {
			fontSize: {
				base: 'md',
				xl: 'xl',
			},
			lineHeight: 1.4,
			fontWeight: 700,
		},
	},
	title3_semibold: {
		value: {
			fontSize: {
				base: 'md',
				xl: 'md',
			},
			lineHeight: 1.4,
			fontWeight: 600,
		},
	},
	body_regular: {
		value: {
			fontSize: {
				base: 'xs',
				xl: 'sm',
			},
			lineHeight: 1.3,
			fontWeight: 400,
		},
	},
	body_medium: {
		value: {
			fontSize: {
				base: 'xs',
				xl: 'sm',
			},
			lineHeight: 1.3,
			fontWeight: 500,
		},
	},
	signature: {
		value: {
			fontSize: {
				base: 'xxs',
				xl: 'xs',
			},
			lineHeight: 1.3,
			fontWeight: 400,
		},
	},
})
