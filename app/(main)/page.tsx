'use client'

import { useIdeas } from '@/api/idea/all/queries'
import ItemCard from '@/components/cards/ItemCard'
import ShareButton from '@/components/ShareButton'
import H2 from '@/components/typography/H2'
import { Box, For, Span, Text } from '@chakra-ui/react'

export default function Home() {
	const { data: ideas } = useIdeas()
	return (
		<>
			<Box>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					w='100%'
				>
					<H2>
						Рекомендации{' '}
						<Span color='secondary.white'>{ideas?.length || 0}</Span>
					</H2>
					<ShareButton />
				</Box>
				<Text
					mt='xxs'
					color='secondary.white'
					textStyle='body_medium'
					maxW='70rem'
				>
					Мы собрали для вас оригинальные идеи подарков на все случаи жизни — от
					недорогих и классных до необычных и креативных. Здесь легко
					вдохновиться и найти прикольные идеи для подарка себе или близким. С
					таким вишлистом подарков вы будете готовы к любому празднику!
				</Text>
			</Box>

			<Box
				m={{ base: '1.6rem 0', md: '3rem 0' }}
				gap={{ base: '2rem 1rem', md: '1.6rem 2rem' }}
				display='flex'
				flexWrap='wrap'
			>
				<For each={ideas} fallback={<Text>Нет предметов</Text>}>
					{(item, index) => (
						<ItemCard
							key={item.id}
							url={`/idea/${item.id}`}
							image={item.image || ''}
							title={item.title}
							price={item.price || 0}
						/>
					)}
				</For>
			</Box>
		</>
	)
}
