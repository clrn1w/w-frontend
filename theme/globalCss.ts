export default {
	html: {
		fontSize: '10px',
		overflowX: 'hidden',
		scrollBehavior: 'smooth',
	},
	body: {
		fontSize: '1.6rem',
	},
	'::-webkit-scrollbar': {
		width: '0.8rem',
		height: '0.8rem',
	},
	'::-webkit-scrollbar-track': {
		borderRadius: '8px',
		backgroundColor: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		borderRadius: '8px',
		border: '2px solid transparent',
		backgroundClip: 'content-box',
		backgroundColor: 'var(--chakra-colors-primary-blue)',
	},

	'body[data-scroll-lock]': {
		paddingRight: '0 !important',
	},
}
