import { Wish } from '@/api/common/Wish'
import ItemCard from '@/components/cards/ItemCard'
import MoreIcon from '@/components/icons/MoreIcon'
import Menu from '@/components/Menu'
import ShareButton from '@/components/ShareButton'
import H2 from '@/components/typography/H2'
import profileMenu from '@/constants/profileMenu'
import { useSessionStore } from '@/store/session'
import { Box, Button, For, Span, Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface WishesSectionProps {
	wishes: Wish[]
	isOwn?: boolean
}

export default function WishesSection({
	wishes,
	isOwn = false,
}: WishesSectionProps) {
	const pathname = usePathname()
	const { user } = useSessionStore()
	return (
		<Box w='stretch'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<H2>
					{isOwn ? 'Мои желания' : 'Все желания'}{' '}
					<Span color='secondary.white'>{wishes.length || 0}</Span>
				</H2>
				<Box display='flex' gap='xs'>
					<ShareButton path={isOwn ? `/profile/${user?.id}` : pathname} />
				</Box>
			</Box>
			<Box
				display='flex'
				flexWrap='wrap'
				justifyContent={{ base: 'center', md: 'flex-start' }}
				gap={{ base: 'sm', md: 'lg' }}
				my={{ base: '1.6rem', md: '3rem' }}
			>
				<For
					each={wishes}
					fallback={
						<Text m='0 auto' color='secondary.white' textStyle='body_medium'>
							{isOwn
								? 'Загадайте своё первое желание. Например, чтобы вы хотели получить на день рождения?'
								: 'В список пока ничего не добавлено'}
						</Text>
					}
				>
					{(item, index) => (
						<ItemCard
							key={item.id}
							url={`/wish/${item.id}`}
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
