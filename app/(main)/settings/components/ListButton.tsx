import ArrowIcon from '@/components/icons/ArrowIcon'
import { Box, Button, ButtonProps, Text } from '@chakra-ui/react'

interface ListButtonProps extends ButtonProps {
	label: string
	Icon: any
	withArrow?: boolean
}

export default function ListButton({
	label,
	Icon,
	withArrow = true,
	...props
}: ListButtonProps) {
	return (
		<Button
			py='xxxs'
			px='0'
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			variant='ghost'
			w='100%'
			{...props}
		>
			<Box display='flex' gap='sm' alignItems='center'>
				<Box bg='secondary.gray' p='xxxs' borderRadius='full'>
					<Icon fontSize='2.4rem' />
				</Box>
				<Text>{label}</Text>
			</Box>
			{withArrow && <ArrowIcon fontSize='2.4rem' />}
		</Button>
	)
}
