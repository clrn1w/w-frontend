import { LayoutProps } from '@/types/NextTypes'
import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
	title: 'WishList - сервис для создания вишлистов',
	description:
		'Сервис для создания вишлистов. Создай список желаний, поделись им с друзьями и получай только «те самые» подарки',
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					key='font'
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
				/>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
