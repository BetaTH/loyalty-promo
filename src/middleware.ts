// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

import { getSession, updateSessionMiddleware } from './lib/sessions'

const publicRoutes = [
  '/',
  '/admin/login',
  '/landing',
  '/teste',
  '/termos-condicoes',
  '/politicas-privacidade',
]

async function hasAdmin(baseUrl: string): Promise<{ adminExists: boolean }> {
  const res = await fetch(`${baseUrl}/api/admin/exists`)
  const data = await res.json()
  if (res.ok) {
    return data
  }
  return {
    adminExists: false,
  }
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = !publicRoutes.includes(path)

  const session = await getSession()

  if (!session.hasSession) {
    if (path === '/admin/registro') {
      const { adminExists } = await hasAdmin(req.nextUrl.origin)
      if (adminExists) {
        return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
      }
      return NextResponse.next()
    }
    if (path.startsWith('/admin')) {
      const { adminExists } = await hasAdmin(req.nextUrl.origin)
      if (!adminExists) {
        return NextResponse.redirect(new URL('/admin/registro', req.nextUrl))
      }
    }

    if (isProtectedRoute) {
      if (path.startsWith('/admin')) {
        const { adminExists } = await hasAdmin(req.nextUrl.origin)
        console.log('adminExists', adminExists)
        if (!adminExists) {
          return NextResponse.redirect(new URL('/admin/registro', req.nextUrl))
        }
        return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
      }
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    return NextResponse.next()
  }

  if (session.role === 'ADMIN') {
    if (path === '/admin/login') {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
    if (path === '/admin/registro') {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
    if (!path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
  }
  if (session.role === 'COMMON') {
    if (path === '/') {
      return NextResponse.redirect(new URL('/meus-pontos', req.nextUrl))
    }
    if (path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
  }

  return await updateSessionMiddleware(
    {
      sub: session.sub,
      email: session.email,
      name: session.name,
      role: session.role,
    },
    NextResponse.next(),
  )
}

export const config = {
  matcher: [
    {
      source: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
      missing: [{ type: 'header', key: 'next-action' }],
    },
  ],
}
