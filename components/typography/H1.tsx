import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

export default function H1({ children, ...props }: HeadingProps) {
	return (
		<Heading textStyle='title1_bold' {...props}>
			{children}
		</Heading>
	)
}
