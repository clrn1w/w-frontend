import LogoutIcon from '@/components/icons/LogoutIcon'

export default [
	{
		text: 'Настройки',
		value: 'create',
		href: '/settings',
	},
	{
		text: 'Выход',
		value: 'share',
		Icon: LogoutIcon,
		href: '/logout',
		color: 'primary.red',
	},
]
