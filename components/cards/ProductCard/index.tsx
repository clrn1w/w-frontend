import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import H2 from '@/components/typography/H2'
import H3 from '@/components/typography/H3'
import RedirectIcon from '@/components/icons/RedirectIcon'
import NextLink from 'next/link'
import CardWrapper from '../CardWrapper'
import { useCopyIdeaMutation } from '@/api/idea/byId/mutations'
import { Idea } from '@/api/common/Idea'
import { useReserveWishMutation } from '@/api/wish/byId/mutations'

interface ProductCardProps {
	item: Idea
	isIdea?: boolean
	isOwn?: boolean
}

export default function ProductCard({
	item,
	isIdea = false,
	isOwn = false,
}: ProductCardProps) {
	return (
		<CardWrapper
			display='flex'
			flexDirection={{ base: 'column', lg: 'row' }}
			gap={{ base: 'sm', md: 'md' }}
			alignItems='center'
			alignSelf='center'
			maxW='1024px'
			w='100%'
		>
			{item.image ? (
				<Image
					src={item.image}
					alt='item'
					aspectRatio={1 / 1}
					borderRadius='md'
					h='36rem'
				/>
			) : (
				<Box
					h='36rem'
					w='36rem'
					background='primary.grayLight'
					borderRadius='md'
				/>
			)}
			<Box w='100%'>
				<H2>{item.title}</H2>
				{item.description && (
					<Text textStyle='body_medium' mt='1.2rem' color='secondary.white'>
						{item.description}
					</Text>
				)}
				<Box
					display='flex'
					flexDirection='column'
					gap='md'
					mt={{ base: 'md', md: 'xl' }}
				>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<Box>
							<Text color='secondary.white' textStyle='signature'>
								Цена:
							</Text>
							<H3>{item.price || 0} ₽</H3>
						</Box>
						{item.link && (
							<Button asChild variant='subtle'>
								<NextLink target='_blank' href={item.link}>
									Где купить? <RedirectIcon />
								</NextLink>
							</Button>
						)}
					</Box>
					{isIdea && (
						<Button size='lg' onClick={handleCopy}>
							Добавить в список
						</Button>
					)}
					{!isIdea && !isOwn && (
						<Button size='lg' onClick={handleReserve}>
							Хочу подарить
						</Button>
					)}
				</Box>
			</Box>
		</CardWrapper>
	)
}
