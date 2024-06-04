import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const secretKey = process.env.JWT_SECRET_KEY
const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  sub: string
  email: string
  name: string
  role: 'COMMON' | 'ADMIN'
}

export async function createToken(payload: SessionPayload, expiresAt: Date) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(encodedKey)
}

export async function verifyToken(token: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as SessionPayload
  } catch (error) {
    // console.log('Failed to verify session')
    return undefined
  }
}

function createExpiresAt() {
  const days = 30 * 24 * 60 * 60 * 1000 // time in milliseconds
  const expiresAt = new Date(Date.now() + days)
  return expiresAt
}

export async function createSession(sessionPayload: SessionPayload) {
  const expiresAt = createExpiresAt()
  const token = await createToken(sessionPayload, expiresAt)

  cookies().set('session', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
}

export async function getSession() {
  const cookie = cookies().get('session')?.value
  const session = await verifyToken(cookie)
  if (!!session && !!session.sub) {
    const right: {
      hasSession: true
      sub: string
      email: string
      name: string
      role: 'COMMON' | 'ADMIN'
    } = {
      hasSession: true,
      sub: session.sub,
      email: session.email,
      name: session.name,
      role: session.role,
    }
    return right
  } else {
    const left: {
      hasSession: false
      sub?: undefined
      email?: undefined
      name?: undefined
      role?: undefined
    } = { hasSession: false }
    return left
  }
}

export async function updateSessionMiddleware(
  sessionPayload: SessionPayload,
  res?: NextResponse,
) {
  const response = res || NextResponse.next()
  const expiresAt = createExpiresAt()
  const token = await createToken(sessionPayload, expiresAt)
  response.cookies.set({
    name: 'session',
    value: token,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
  return response
}

export function deleteSession() {
  cookies().delete('session')
}
