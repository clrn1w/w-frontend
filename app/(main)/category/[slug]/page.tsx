'use client'

import { useIdeasByCategory } from '@/api/idea/byCategory/queries'
import { Box, Button, For, Span, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import { defaultSidebar } from '@/constants/sidebarList'
import H3 from '@/components/typography/H3'
import H2 from '@/components/typography/H2'
import ItemCard from '@/components/cards/ItemCard'

export default function CategorySlugPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = React.use(params)
	const {
		data: categoryItems,
		isPending,
		error,
	} = useIdeasByCategory({ category: slug })

	const category = defaultSidebar.find(
		item => item.href === `/category/${slug}`
	)

	if (!category) {
		return <Box>Категория не найдена</Box>
	}

	return (
		<Box display='flex' gap={{ base: 'sm', md: 'lg' }} flexDirection='column'>
			<NextLink href='/'>
				<Box display='flex' gap='md' alignItems='center'>
					<Button
						variant='subtle'
						size='sm'
						_icon={{ transform: 'rotate(180deg)' }}
					>
						<ArrowIcon />
					</Button>
					<H3 color='secondary.white'>{category.title}</H3>
				</Box>
			</NextLink>

			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				w='100%'
			>
				<H2>
					Подборка{' '}
					<Span color='secondary.white'>{categoryItems?.length || 0}</Span>
				</H2>
				{/* <ShareButton /> */}
			</Box>

			<Box
				gap={{ base: '2rem 1rem', md: '1.6rem 2rem' }}
				display='flex'
				flexWrap='wrap'
			>
				<For each={categoryItems}>
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
		</Box>
	)
}
