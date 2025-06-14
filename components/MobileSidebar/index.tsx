'use client'

import { Box, Button, Dialog, Portal } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import {
	defaultSidebar,
	profileSidebar,
	adminSidebar,
} from '@/constants/sidebarList'
import NextLink from 'next/link'
import CloseIcon from '../icons/CloseIcon'

interface MobileSidebarProps {
	isOpen: boolean
	onClose: () => void
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
	const pathname = usePathname()

	const handleItemClick = () => {
		onClose()
	}

	const sidebarItems = profileSidebar.some(item => item.href === pathname)
		? profileSidebar
		: pathname.includes('/admin')
		? adminSidebar
		: defaultSidebar

	return (
		<Dialog.Root open={isOpen} onOpenChange={onClose}>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content
						bg='primary.gray'
						p='1.6rem'
						position='absolute'
						left='0'
						top='0'
						bottom='0'
						width='100%'
						maxW='300px'
						margin='0'
						borderRadius='0'
					>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							mb='2.4rem'
						>
							<Dialog.CloseTrigger asChild>
								<Button variant='ghost'>
									<CloseIcon w='2.4rem' h='2.4rem' />
								</Button>
							</Dialog.CloseTrigger>
						</Box>
						<Box display='flex' flexDirection='column' gap='1.6rem'>
							{sidebarItems.map(({ title, href, Icon }, idx) => (
								<Button
									key={idx}
									asChild
									variant='ghost'
									justifyContent='flex-start'
									opacity={pathname === href ? 1 : 0.5}
									_hover={{ opacity: 1 }}
								>
									<NextLink href={href} onClick={handleItemClick}>
										<Box display='flex' alignItems='center' gap='1.6rem'>
											<Icon w='2.4rem' h='2.4rem' />
											{title}
										</Box>
									</NextLink>
								</Button>
							))}
						</Box>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}
