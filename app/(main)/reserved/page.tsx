'use client'

import { useSessionStore } from '@/store/session'
import { Box, For, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileInfoSection from '../profile/sections/ProfileInfoSection'
import { useReservedWishes } from '@/api/wish/reserved/queries'
import H2 from '@/components/typography/H2'
import ItemCard from '@/components/cards/ItemCard'

export default function ReservedPage() {
	const { user, isLoading } = useSessionStore()

	const {
		data: wishes,
		isPending: isWishesPending,
		error: wishesError,
	} = useReservedWishes()

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
			<Box w='stretch'>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<H2>Хочу подарить</H2>
				</Box>
				<Box
					display='flex'
					flexWrap='wrap'
					justifyContent={{ base: 'center', md: 'flex-start' }}
					gap={{ base: 'sm', md: 'lg' }}
					my={{ base: '1.6rem', md: '3rem' }}
				>
					<For
						each={wishes}
						fallback={
							<Text m='0 auto' color='secondary.white' textStyle='body_medium'>
								Вы пока ничего не зарезервировали
							</Text>
						}
					>
						{(item, index) => (
							<ItemCard
								key={item.id}
								url={`/wish/${item.id}`}
								image={item.image || ''}
								title={item.title}
								price={item.price || 0}
							/>
						)}
					</For>
				</Box>
			</Box>
		</Box>
	)
}
