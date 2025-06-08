import H3 from '@/components/typography/H3'
import { Box, BoxProps } from '@chakra-ui/react'

export interface SectionProps extends BoxProps {
	label?: string
}

export default function Section({ label, children, ...props }: SectionProps) {
	return (
		<Box>
			{label && <H3 color='secondary.white'>{label}</H3>}
			<Box
				mt='xxs'
				w='100%'
				bg='primary.gray'
				p='md'
				borderRadius='md'
				{...props}
			>
				{children}
			</Box>
		</Box>
	)
}
