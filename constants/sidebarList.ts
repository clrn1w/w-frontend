import AutoIcon from '@/components/icons/AutoIcon'
import BeautyIcon from '@/components/icons/BeautyIcon'
import ClothIcon from '@/components/icons/ClothIcon'
import CouponIcon from '@/components/icons/CouponIcon'
import EducationIcon from '@/components/icons/EducationIcon'
import ElectronicIcon from '@/components/icons/ElectronicIcon'
import FireIcon from '@/components/icons/FireIcon'
import HiddenIcon from '@/components/icons/HiddenIcon'
import JewelryIcon from '@/components/icons/JewelryIcon'
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
	{
		title: 'Одежда и обувь',
		Icon: ClothIcon,
		href: '/category/cloth',
	},
	{
		title: 'Электроника',
		Icon: ElectronicIcon,
		href: '/category/electronic',
	},
	{
		title: 'Для авто',
		Icon: AutoIcon,
		href: '/category/auto',
	},
	{
		title: 'Украшения',
		Icon: JewelryIcon,
		href: '/category/jewelry',
	},
	{
		title: 'Подарочные сертификаты',
		Icon: CouponIcon,
		href: '/category/coupon',
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
