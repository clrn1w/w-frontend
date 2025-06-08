import React from 'react'
import ShareIcon from './icons/ShareIcon'
import { usePathname } from 'next/navigation'
import { Button, Span } from '@chakra-ui/react'
import ShareModal from './modals/ShareModal'

export default function ShareButton({ path }: { path?: string }) {
	const pathname = usePathname()
	const currentSiteUrl =
		typeof window !== 'undefined' ? window.location.origin : ''

	return (
		<ShareModal
			trigger={
				<Button variant='subtle'>
					<Span display={{ base: 'none', md: 'flex' }}>Поделиться</Span>
					<ShareIcon />
				</Button>
			}
			url={path ? `${currentSiteUrl}${path}` : `${currentSiteUrl}${pathname}`}
		/>
	)
}
