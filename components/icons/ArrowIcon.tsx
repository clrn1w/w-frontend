'use client'

import { createIcon } from '@chakra-ui/react'

export default createIcon({
	displayName: 'ArrowIcon',
	path: (
		<>
			<path
				d='M8 2L16.8889 12L8 22'
				stroke='white'
				strokeWidth='2.22222'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),
	defaultProps: { fill: 'none' },
})
