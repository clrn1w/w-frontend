import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { LayoutProps } from '@/types/NextTypes'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }: LayoutProps) {

	return (
		<Box minH='100vh' p='1.6rem'>
			<Header />
			<Box display='flex' pt='2.4rem' gap='1.6rem' h='100%' w='100% '>
				<Sidebar minW='25rem' display={{ base: 'none', md: 'flex' }} />
				<Box w='stretch'>{children}</Box>
			</Box>
		</Box>
	)
}
