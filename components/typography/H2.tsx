import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

export default function H2({ children, ...props }: HeadingProps) {
	return (
		<Heading textStyle='title2_bold' {...props}>
			{children}
		</Heading>
	)
}
