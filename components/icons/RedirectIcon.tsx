'use client'

import { createIcon } from '@chakra-ui/react'

export default createIcon({
	displayName: 'RedirectIcon',
	path: (
		<>
			<path
				d='M11.9993 4.6665C9.826 4.6665 8.73932 4.6665 7.87418 4.9986C6.55125 5.50642 5.50594 6.55174 4.99811 7.87467C4.66602 8.73981 4.66602 9.82649 4.66602 11.9998C4.66602 14.1732 4.66602 15.2599 4.99811 16.125C5.50594 17.4479 6.55125 18.4933 7.87418 19.0011C8.73932 19.3332 9.826 19.3332 11.9993 19.3332C14.1727 19.3332 15.2594 19.3332 16.1245 19.0011C17.4474 18.4933 18.4928 17.4479 19.0006 16.125C19.3327 15.2599 19.3327 14.1732 19.3327 11.9998'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M15.3333 4.6665H19.3333M19.3333 4.6665V8.6665M19.3333 4.6665L12 11.9998'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),
	defaultProps: { fill: 'none' },
})
