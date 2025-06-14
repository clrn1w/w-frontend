'use client'

import { useUser, useUserWishes } from '@/api/user/byId/queries'
import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'
import ProfileInfoSection from '../sections/ProfileInfoSection'
import WishesSection from '../sections/WishesSection'
import { useSessionStore } from '@/store/session'

export default function ProfileSlugPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = React.use(params)
	const { user: me, isAuthorized, isLoading } = useSessionStore()

	const {
		data: user,
		isPending: isUserPending,
		error: userError,
	} = useUser(
		{ id: slug },
		{
			enabled: !!slug,
		}
	)

	const {
		data: wishes,
		isPending: isWishesPending,
		error: wishesError,
	} = useUserWishes(
		{ id: slug },
		{
			enabled: !!slug,
		}
	)

	if (isWishesPending || isUserPending || isLoading) {
		return (
			<Box textAlign='center' mt='20'>
				<Spinner size='xl' />
			</Box>
		)
	}

	console.log(user, wishes)

	return (
		<Box display='flex' flexDirection='column' alignItems='center' gap='lg'>
			<ProfileInfoSection
				avatar={user?.avatar || undefined}
				displayName={user?.displayName || 'Незнакомец'}
				isOwn={me?.id === user?.id}
			/>
			<WishesSection
				wishes={wishes?.filter(x => !x.isCompleted) || []}
				isOwn={me?.id === user?.id}
			/>
		</Box>
	)
}
