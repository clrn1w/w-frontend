'use client'

import { Box, Text, Spinner, Button, Image } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import H3 from '@/components/typography/H3'
import { useSessionStore } from '@/store/session'
import CardWrapper from '@/components/cards/CardWrapper'
import { useWish } from '@/api/wish/byId/queries'
import H2 from '@/components/typography/H2'
import RedirectIcon from '@/components/icons/RedirectIcon'
import {
	useCompletionWishMutation,
	useDeleteWishMutation,
	useReserveWishMutation,
} from '@/api/wish/byId/mutations'

export default function WishSlugPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = React.use(params)

	const { user, isAuthorized } = useSessionStore()
	const { mutateAsync: reserveWish } = useReserveWishMutation()
	const { mutateAsync: completeWishMutation } = useCompletionWishMutation()
	const { mutateAsync: deleteWishMutation } = useDeleteWishMutation()
	const { data: item, isPending, error } = useWish({ id: slug })

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

	const isOwn = user?.id == item.userId

	const handleReserve = async () => {
		try {
			await reserveWish({
				values: {
					id: item.id,
				},
			})
		} catch (error) {
			console.error('Ошибка при добавлении в список:', error)
		}
	}

	const handleComplete = async () => {
		try {
			await completeWishMutation({
				values: {
					id: item.id,
					isCompleted: true,
				},
			})
		} catch (error) {
			console.error('Ошибка при исполнении желания:', error)
		}
	}

	const handleDelete = async () => {
		try {
			await deleteWishMutation({
				values: {
					id: item.id,
				},
			})
		} catch (error) {
			console.error('Ошибка при удалении желания:', error)
		}
	}

	return (
		<Box display='flex' gap={{ base: 'sm', md: 'lg' }} flexDirection='column'>
			<NextLink href={isOwn ? '/profile' : `/profile/${item.userId}`}>
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
							{item.price && item.price > 0 ? (
								<Box>
									<Text color='secondary.white' textStyle='signature'>
										Цена:
									</Text>
									<H3>{item.price} ₽</H3>
								</Box>
							) : (
								<Box></Box>
							)}
							{item.link && (
								<Button asChild variant='subtle'>
									<NextLink target='_blank' href={item.link}>
										Где купить? <RedirectIcon />
									</NextLink>
								</Button>
							)}
						</Box>
						{isAuthorized && !isOwn && (
							<Button
								size='lg'
								onClick={handleReserve}
								disabled={item.isReserved}
							>
								{item.isReserved ? 'Зарезервировано' : 'Хочу подарить'}
							</Button>
						)}
						{isOwn && (
							<Box display='flex' gap='sm'>
								{!item.isCompleted && (
									<Button size='sm' onClick={handleComplete}>
										Исполнено
									</Button>
								)}
								<Button variant='subtle' size='sm' onClick={handleDelete}>
									Удалить желание
								</Button>
							</Box>
						)}
					</Box>
				</Box>
			</CardWrapper>
		</Box>
	)
}
