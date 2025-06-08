import { Box, Button, Text } from '@chakra-ui/react'
import Section from '../components/Section'
import { Avatar } from '@/components/ui/avatar'
import H3 from '@/components/typography/H3'
import EditUserModal from '@/components/modals/EditUserModal'
import PencilIcon from '@/components/icons/PencilIcon'
import { useSessionStore } from '@/store/session'

export default function GeneralSection() {
	const { user } = useSessionStore()

	return (
		<Section
			label='Общие сведения'
			display='flex'
			gap='lg'
			alignItems='center'
			position='relative'
		>
			<Box w='100px' h='100px' asChild>
				<Avatar fontSize='5rem' size='full' src={user?.avatar || undefined} />
			</Box>
			<Box>
				<H3>{user?.displayName}</H3>
				<Text color='secondary.white'>{user?.username}</Text>
			</Box>
			<EditUserModal
				trigger={
					<Button
						size='sm'
						variant='ghost'
						position='absolute'
						top='xs'
						right='xs'
					>
						<PencilIcon />
					</Button>
				}
			/>
		</Section>
	)
}
