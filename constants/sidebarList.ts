import BeautyIcon from '@/components/icons/BeautyIcon'
import EducationIcon from '@/components/icons/EducationIcon'
import FireIcon from '@/components/icons/FireIcon'
import HiddenIcon from '@/components/icons/HiddenIcon'
import MarkIcon from '@/components/icons/MarkIcon'
import StarsIcon from '@/components/icons/StarsIcon'

export const defaultSidebar = [
	{
		title: 'Для вас',
		Icon: FireIcon,
		href: '/',
	},
	{
		title: 'Образование',
		Icon: EducationIcon,
		href: '/category/education',
	},
	{
		title: 'Красота и здоровье',
		Icon: BeautyIcon,
		href: '/category/beauty',
	},
]

export const profileSidebar = [
	{
		title: 'Мои желания',
		Icon: FireIcon,
		href: '/profile',
	},
	// {
	// 	title: 'Секретные',
	// 	Icon: HiddenIcon,
	// 	href: '/secret',
	// },
	{
		title: 'Хочу подарить',
		Icon: StarsIcon,
		href: '/reserved',
	},
	{
		title: 'Исполнено',
		Icon: MarkIcon,
		href: '/completed',
	},
]

export const adminSidebar = [
	{
		title: 'Идеи',
		Icon: FireIcon,
		href: '/admin/ideas',
	},
	{
		title: 'Пользователи',
		Icon: FireIcon,
		href: '/admin/users',
	},
]
