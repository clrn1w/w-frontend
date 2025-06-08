'use client'

import { Box, Spinner } from '@chakra-ui/react'
import Section from './components/Section'
import GeneralSection from './sections/GeneralSection'
import ListButton from './components/ListButton'
import { useRouter } from 'next/navigation'
import LogoutIcon from '@/components/icons/LogoutIcon'
import { useSessionStore } from '@/store/session'
import DataManagerSection from './sections/DataManagerSection'

export default function SettingsPage() {
	const router = useRouter()
	const { isLoading } = useSessionStore()

	if (isLoading) {
		return (
			<Box textAlign='center' mt='20'>
				<Spinner size='xl' />
			</Box>
		)
	}

	return (
		<Box display='flex' flexDirection='column' gap='lg' maxW='75rem' mx='auto'>
			<GeneralSection />
			<DataManagerSection />
			<Section>
				<ListButton
					label='Выход'
					Icon={LogoutIcon}
					color='primary.red'
					withArrow={false}
					onClick={() => router.push('/logout')}
				/>
			</Section>
		</Box>
	)
}
