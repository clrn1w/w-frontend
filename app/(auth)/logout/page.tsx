'use client'

import { useEffect } from 'react'
import { useLogoutMutation } from '@/api/auth/mutations'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
	const router = useRouter()
	const { mutate: logoutMutate, isSuccess } = useLogoutMutation()

	useEffect(() => {
		logoutMutate()
	}, [logoutMutate])

	useEffect(() => {
		if (isSuccess) {
			router.push('/')
		}
	}, [isSuccess, router])

	return null
}
