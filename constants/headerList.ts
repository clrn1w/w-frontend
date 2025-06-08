import FireIcon from '@/components/icons/FireIcon'
import HeartIcon from '@/components/icons/HeartIcon'

export default [
	{
		title: 'Лента',
		Icon: FireIcon,
		iconColor: '#FF7A00',
		url: '/',
	},
	{
		title: 'Мои желания',
		Icon: HeartIcon,
		iconColor: 'primary.red',
		url: '/profile',
		authRequired: true,
	},
]
