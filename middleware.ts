import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	// const accessToken = request.cookies.get('session')
	// if (!accessToken) {
	// 	return NextResponse.redirect(new URL('/login', request.url))
	// }
}

export const config = {
	matcher: ['/logout', '/profile'],
}
