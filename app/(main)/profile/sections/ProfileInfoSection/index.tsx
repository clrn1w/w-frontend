import PlusIcon from '@/components/icons/PlusIcon'
import CreateWishModal from '@/components/modals/CreateWishModal'
import H1 from '@/components/typography/H1'
import { Avatar } from '@/components/ui/avatar'
import { Box, Button } from '@chakra-ui/react'

export interface ProfileInfoSectionProps {
	avatar: string | undefined
	displayName: string
	isOwn?: boolean
}

export default function ProfileInfoSection({
	avatar,
	displayName,
	isOwn = false,
}: ProfileInfoSectionProps) {
	return (
		<>
			<Box
				w={{ base: '10rem', md: '20rem' }}
				h={{ base: '10rem', md: '20rem' }}
				asChild
			>
				<Avatar
					name={displayName}
					fontSize={{ base: '5rem', md: '10rem' }}
					size='full'
					src={avatar}
				/>
			</Box>
			<H1>{displayName}</H1>
			{isOwn && (
				<CreateWishModal
					trigger={
						<Button size={{ base: 'md', md: 'lg' }} textStyle='title3_semibold'>
							<PlusIcon />
							Загадать желание
						</Button>
					}
				/>
			)}
		</>
	)
}
