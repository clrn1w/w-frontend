'use client'

import { Box, BoxProps } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface CardWrapperProps extends BoxProps {
	children: ReactNode
}

export default function CardWrapper({ children, ...props }: CardWrapperProps) {
	return (
		<Box
			w='fit-content'
			p={{ base: 'sm', md: 'xl' }}
			border='1px solid'
			borderColor='secondary.border'
			borderRadius='xxl'
			background='primary.gray'
			{...props}
		>
			{children}
		</Box>
	)
}
