import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/category/*'],
			disallow: [
				'/admin',
				'/admin/*',
				'/profile',
				'/uploads',
				'/settings',
				'/logout',
			],
		},
		sitemap: 'https://clrn1w.ru/sitemap.xml',
	}
}
