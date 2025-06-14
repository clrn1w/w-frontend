'use client'

import { Box, Text, useSlotRecipe } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import NextLink from 'next/link'
import { SlotRecipeStyles } from '@/types/SlotRecipeStyles'

import { itemCardSlotRecipe } from './itemCard.recipe'

export interface ItemCard {
	image?: string
	title: string
	price: number
	url: string
}

export default function ItemCard({ image, title, price, url }: ItemCard) {
	const recipe = useSlotRecipe({ recipe: itemCardSlotRecipe })
	const styles = recipe({}) as SlotRecipeStyles<typeof itemCardSlotRecipe>

	return (
		<Box css={styles.wrapper} asChild>
			<NextLink href={url}>
				{image ? (
					<Image
						src={image}
						alt='image'
						css={styles.image}
						aspectRatio={9 / 16}
					/>
				) : (
					<Box css={styles.image} aspectRatio={9 / 16} />
				)}
				<Text css={styles.title}>{title}</Text>
				{price > 0 ? <Text css={styles.price}>{price} ₽</Text> : ''}
			</NextLink>
		</Box>
	)
}
