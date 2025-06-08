import { toaster } from '@/components/ui/toaster'

export class FetchError extends Error {
	public constructor(public statusCode: number, public message: string) {
		super(message)

		Object.setPrototypeOf(this, new.target.prototype)
		if (
			message !==
			'Пользователь не авторизован. Пожалуйста, войдите в систему, чтобы получить доступ'
		) {
			toaster.create({
				description: message,
				type: 'error',
				duration: 2500,
			})
		}
	}
}
