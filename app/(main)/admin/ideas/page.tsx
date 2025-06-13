'use client'

import {
	Box,
	Button,
	Container,
	Flex,
	IconButton,
	SimpleGrid,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { useIdeas } from '@/api/idea/all/queries'
import { useDeleteIdeaMutation } from '@/api/idea/byId/mutations'
import CreateIdeaModal from '@/components/modals/CreateIdeaModal'
import CloseIcon from '@/components/icons/CloseIcon'
import PencilIcon from '@/components/icons/PencilIcon'
import EditIdeaModal from '@/components/modals/EditIdeaModal'
import H2 from '@/components/typography/H2'
import PlusIcon from '@/components/icons/PlusIcon'
import H3 from '@/components/typography/H3'

type OpenChangeDetails = { open: boolean }

export default function AdminPage() {
	const { data: ideas = [], refetch } = useIdeas()
	const { mutateAsync: deleteIdea } = useDeleteIdeaMutation()

	const handleDelete = async (id: string) => {
		await deleteIdea({ values: { id } })
		refetch()
	}

	return (
		<Container maxW='container.xl' py={8}>
			<Flex justify='space-between' align='center' mb={8}>
				<H2>Управление идеями</H2>
				<CreateIdeaModal
					trigger={
						<Button size='sm'>
							<PlusIcon />
						</Button>
					}
					onOpenChange={() => refetch()}
				/>
			</Flex>

			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
				{ideas.map(idea => (
					<Box
						key={idea.id}
						p={5}
						shadow='md'
						borderWidth='1px'
						borderRadius='lg'
						bg='secondary.gray'
					>
						<Flex direction='column' gap={3}>
							<H3>{idea.title}</H3>
							<Text maxLines={3}>{idea.description}</Text>
							{idea.price && <Text>Цена: {idea.price}</Text>}
							{idea.link && (
								<Text>
									Ссылка:{' '}
									<a href={idea.link} target='_blank' rel='noopener noreferrer'>
										{idea.link}
									</a>
								</Text>
							)}
							<Flex justify='flex-end' gap={2}>
								<EditIdeaModal
									idea={idea}
									trigger={
										<IconButton aria-label='Edit idea' variant='ghost'>
											<PencilIcon />
										</IconButton>
									}
									onOpenChange={() => refetch()}
								/>
								<IconButton
									aria-label='Delete idea'
									variant='ghost'
									colorScheme='red'
									onClick={() => handleDelete(idea.id)}
								>
									<CloseIcon />
								</IconButton>
							</Flex>
						</Flex>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	)
}
