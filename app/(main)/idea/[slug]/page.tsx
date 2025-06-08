'use client'

import { Box, Text, Spinner, Button, Image } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import H3 from '@/components/typography/H3'
import ProductCard from '@/components/cards/ProductCard'
import { useIdea } from '@/api/idea/byId/queries'
import CardWrapper from '@/components/cards/CardWrapper'
import H2 from '@/components/typography/H2'
import RedirectIcon from '@/components/icons/RedirectIcon'
import { useCopyIdeaMutation } from '@/api/idea/byId/mutations'
import { useSessionStore } from '@/store/session'

export default function IdeaSlugPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = React.use(params)

	const { data: item, isPending, error } = useIdea({ id: slug })
	const { mutateAsync: copyIdea } = useCopyIdeaMutation()
	const { isAuthorized } = useSessionStore()

	if (isPending) {
		return (
			<Box textAlign='center' mt='20'>
				<Spinner size='xl' />
			</Box>
		)
	}

	if (error) {
		return (
			<Box textAlign='center' mt='20'>
				<Text>Ошибка загрузки данных. Попробуйте снова.</Text>
			</Box>
		)
	}

	if (!item) {
		return <Box>Товар не найден</Box>
	}

	const handleCopy = async () => {
		try {
			await copyIdea({
				values: {
					id: item.id,
				},
			})
		} catch (error) {
			console.error('Ошибка при добавлении в список:', error)
		}
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
					<H3 color='secondary.white'>Вернуться</H3>
				</Box>
			</NextLink>
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
						aspectRatio={1 / 1}
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
							{item.price && (
								<Box>
									<Text color='secondary.white' textStyle='signature'>
										Цена:
									</Text>
									<H3>{item.price} ₽</H3>
								</Box>
							)}
							{item.link && (
								<Button asChild variant='subtle'>
									<NextLink target='_blank' href={item.link}>
										Где купить? <RedirectIcon />
									</NextLink>
								</Button>
							)}
						</Box>
						{isAuthorized && (
							<Button size='lg' onClick={handleCopy}>
								Добавить в список
							</Button>
						)}
					</Box>
				</Box>
			</CardWrapper>
		</Box>
	)
}
