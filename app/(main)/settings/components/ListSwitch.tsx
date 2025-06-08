import { Switch, SwitchProps } from '@/components/ui/switch'
import { Box, Text } from '@chakra-ui/react'

interface ListSwitchProps extends SwitchProps {
	label: string
	Icon: any
}

export default function ListSwitch({ label, Icon, ...props }: ListSwitchProps) {
	return (
		<Box
			py='xxxs'
			px='0'
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			w='100%'
		>
			<Box display='flex' gap='sm' alignItems='center'>
				<Box bg='secondary.gray' p='xxxs' borderRadius='full'>
					<Icon w='2.4rem' />
				</Box>
				<Text>{label}</Text>
			</Box>
			<Switch {...props} />
		</Box>
	)
}
