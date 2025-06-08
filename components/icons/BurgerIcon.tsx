'use client'

import { createIcon } from '@chakra-ui/react'

export default createIcon({
	displayName: 'BurgerIcon',
	path: (
		<>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</>
	),
	defaultProps: {
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: '2',
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
	},
})
