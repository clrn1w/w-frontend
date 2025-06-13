import { defaultSidebar } from '@/constants/sidebarList'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const categoryUrls = defaultSidebar.map(item => ({
		url: `https://clrn1w.ru${item.href}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as 'monthly',
		priority: 0.8,
	}))

	return [
		{
			url: 'https://clrn1w.ru',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		...categoryUrls,
	]
}
