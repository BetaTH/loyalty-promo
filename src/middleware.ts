// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { getSession, updateSessionMiddleware } from './lib/user-sessions'

// const privateRoutes = ['/', '/admin']
const publicRoutes = ['/login', '/admin/login']

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = !publicRoutes.includes(path)

  const session = await getSession()

  if (!session.hasSession && isProtectedRoute) {
    if (req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
    }
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
  if (session.hasSession) {
    if (req.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    if (req.nextUrl.pathname === '/admin/login') {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
  }

  const res = NextResponse.next()

  if (session.hasSession) {
    return await updateSessionMiddleware(
      session.sub,
      session.email,
      session.name,
      res,
    )
  }
  return res
}

export const config = {
  matcher: [
    {
      source: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
      missing: [{ type: 'header', key: 'next-action' }],
    },
  ],
}
