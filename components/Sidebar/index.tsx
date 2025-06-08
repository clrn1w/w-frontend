'use client'

import {
	chakra,
	For,
	HTMLChakraProps,
	Link,
	RecipeVariantProps,
	useSlotRecipe,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { RefObject } from 'react'

import { SlotRecipeStyles } from '@/types/SlotRecipeStyles'

import { sidebarSlotRecipe } from './sidebar.recipe'

import NextLink from 'next/link'
import { defaultSidebar, profileSidebar } from '@/constants/sidebarList'

type SidebarVariantProps = RecipeVariantProps<typeof sidebarSlotRecipe>

export interface SidebarProps
	extends HTMLChakraProps<'div', SidebarVariantProps> {
	ref?: RefObject<HTMLDivElement>
}

export default function Sidebar({ ref, ...props }: SidebarProps) {
	const pathname = usePathname()

	const sidebarItems = profileSidebar.some(item => item.href === pathname)
		? profileSidebar
		: defaultSidebar

	const recipe = useSlotRecipe({ recipe: sidebarSlotRecipe })

	const styles = recipe({}) as SlotRecipeStyles<typeof sidebarSlotRecipe>

	return (
		<chakra.div ref={ref} css={styles.wrapper} {...props}>
			<For each={sidebarItems}>
				{({ title, href, Icon }, idx) => (
					<Link
						key={idx}
						asChild
						css={{
							...styles.item,
							opacity: pathname === href ? 1 : 0.5,
						}}
					>
						<NextLink href={href}>
							<Icon w='2.4rem' h='2.4rem' />
							{title}
						</NextLink>
					</Link>
				)}
			</For>
		</chakra.div>
	)
}
