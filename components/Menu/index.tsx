import { ReactNode } from 'react'

import {
	Box,
	Portal,
	Menu as ChakraMenu,
	MenuRootProps,
	MenuItemProps,
} from '@chakra-ui/react'
import NextLink from 'next/link'

interface MenuItem extends MenuItemProps {
	text: string
	href?: string
	Icon?: any
}

export interface MenuProps extends Omit<MenuRootProps, 'children'> {
	trigger: ReactNode
	items: MenuItem[]
}

export default function Menu({ trigger, items, ...props }: MenuProps) {
	return (
		<ChakraMenu.Root {...props}>
			<ChakraMenu.Trigger asChild>{trigger}</ChakraMenu.Trigger>
			<Portal>
				<ChakraMenu.Positioner>
					<ChakraMenu.Content>
						{items.map(({ Icon, text, href, ...item }, index) => (
							<ChakraMenu.Item key={index} {...item} asChild>
								{href ? (
									<NextLink href={href}>
										{Icon && <Icon w='2.4rem' h='2.4rem' />}
										<Box flex='1'>{text}</Box>
									</NextLink>
								) : (
									<Box>
										{Icon && <Icon w='2.4rem' h='2.4rem' />}
										<Box flex='1'>{text}</Box>
									</Box>
								)}
							</ChakraMenu.Item>
						))}
					</ChakraMenu.Content>
				</ChakraMenu.Positioner>
			</Portal>
		</ChakraMenu.Root>
	)
}
