import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

export default function H3({ children, ...props }: HeadingProps) {
	return (
		<Heading textStyle='title3_semibold' {...props}>
			{children}
		</Heading>
	)
}
