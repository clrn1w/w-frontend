'use client'

import { useUserWishes } from '@/api/user/byId/queries'
import { useSessionStore } from '@/store/session'
import { Box, Spinner } from '@chakra-ui/react'
import ProfileInfoSection from './sections/ProfileInfoSection'
import WishesSection from './sections/WishesSection'

export default function ProfilePage() {
	const { user, isAuthorized, isLoading } = useSessionStore()

	const {
		data: wishes,
		isPending: isWishesPending,
		error: wishesError,
	} = useUserWishes(
		{ id: user?.id },
		{
			enabled: !!user,
		}
	)

	if (isLoading || isWishesPending) {
		return (
			<Box textAlign='center' mt='20'>
				<Spinner size='xl' />
			</Box>
		)
	}

	return (
		<Box display='flex' flexDirection='column' alignItems='center' gap='lg'>
			<ProfileInfoSection
				avatar={user?.avatar || undefined}
				displayName={user?.displayName || 'Незнакомец'}
				isOwn
			/>
			<WishesSection wishes={wishes || []} isOwn />
		</Box>
	)
}
