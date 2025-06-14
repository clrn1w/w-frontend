'use client'

import headerList from '@/constants/headerList'
import Menu from '../Menu'
import {
	Box,
	Button,
	Spinner,
	useBreakpointValue,
	Image,
	Tabs,
} from '@chakra-ui/react'
import BurgerIcon from '../icons/BurgerIcon'
import externalActionsList from '@/constants/externalActionsList'
import NextLink from 'next/link'
import { useSessionStore } from '@/store/session'
import logoPCImg from '@/public/logoPC.svg'
import { usePathname } from 'next/navigation'
import { profileSidebar } from '@/constants/sidebarList'
import { useState } from 'react'
import MobileSidebar from '../MobileSidebar'

export default function Header() {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
	const { user, isAuthorized, isLoading } = useSessionStore()
	const pathname = usePathname()

	const isUserProfile =
		user?.id &&
		pathname.match(/^\/profile\/([^/]+)$/) &&
		pathname === `/profile/${user.id}`

	const activeTab =
		isUserProfile || profileSidebar.some(({ href }) => href === pathname)
			? '/profile'
			: headerList.some(({ url }) => url === pathname)
			? pathname
			: '/'

	if (isLoading) return null

	return (
		<>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Box display='flex' alignItems='center' gap='1.6rem'>
					<Button
						display={{ base: 'flex', md: 'none' }}
						unstyled
						onClick={() => setIsMobileSidebarOpen(true)}
					>
						<BurgerIcon w='2.4rem' h='2.4rem' />
					</Button>
					<NextLink href='/'>
						<Image
							src={logoPCImg.src}
							alt='logo'
							display={{ base: 'none', md: 'block' }}
						/>
					</NextLink>
				</Box>
				<Tabs.Root value={activeTab} variant='header'>
					<Tabs.List>
						{headerList.map(({ title, url, Icon, iconColor, authRequired }) => (
							<NextLink
								key={url}
								href={!isAuthorized && authRequired ? '/login' : url}
							>
								<Tabs.Trigger
									value={url}
									_selected={{
										_icon: {
											color: iconColor || 'currentColor',
										},
									}}
								>
									<Icon w='2.4rem' h='2.4rem' />
									{title}
								</Tabs.Trigger>
							</NextLink>
						))}
						<Tabs.Indicator />
					</Tabs.List>
				</Tabs.Root>
				{isAuthorized ? (
					<Menu
						trigger={
							<Button size='sm' variant='outline'>
								<BurgerIcon />
							</Button>
						}
						items={[
							...externalActionsList,
							...(user?.userType === 'ADMIN'
								? [
										{
											text: 'Админ-панель',
											value: 'admin',
											href: '/admin/ideas',
										},
								  ]
								: []),
						]}
					/>
				) : (
					<Button asChild>
						<NextLink href='/login'>Войти</NextLink>
					</Button>
				)}
			</Box>
			<MobileSidebar
				isOpen={isMobileSidebarOpen}
				onClose={() => setIsMobileSidebarOpen(false)}
			/>
		</>
	)
}
