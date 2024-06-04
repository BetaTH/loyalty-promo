'use server'
import { compare, hash } from 'bcryptjs'
import { z } from 'zod'

import { AdminsRepository } from '@/server/prisma/repositories/admins-repository'

import { createSession } from '../sessions'

const signInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
interface SignInState {
  ok?: boolean | undefined
  status?: number | undefined
  message?: string | undefined
}
export async function signIn(
  _: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const validatedData = signInDataSchema.safeParse(rawFormData)
  if (!validatedData.success) {
    return {
      ok: false,
      status: 400,
      message: 'Dados enviados de forma incorreta',
    }
  }

  const { email, password } = validatedData.data

  const adminsRepository = new AdminsRepository()
  const admin = await adminsRepository.getUserByEmail(email)

  if (!admin) {
    return {
      ok: false,
      status: 400,
      message: 'Credenciais Invalidas',
    }
  }
  const doesPasswordMatches = await compare(password, admin.password)

  if (!doesPasswordMatches) {
    return {
      ok: false,
      status: 400,
      message: 'Credenciais Invalidas',
    }
  }

  createSession({
    sub: String(admin.id),
    email: admin.email,
    name: admin.name,
    role: 'ADMIN',
  })

  return { ok: true, status: 200 }
}

const firstSignUpDataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})
interface FirstSignUpState {
  ok?: boolean | undefined
  status?: number | undefined
  message?: string | undefined
}
export async function firstSignUp(
  _: SignInState,
  formData: FormData,
): Promise<FirstSignUpState> {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const adminsRepository = new AdminsRepository()

  try {
    const adminExists = await adminsRepository.getFirst()
    if (adminExists) {
      return {
        ok: false,
        status: 401,
        message: 'Não autorizado',
      }
    }
  } catch (e) {
    return { ok: false, status: 500, message: 'Error interno ao registrar' }
  }

  const validatedData = firstSignUpDataSchema.safeParse(rawFormData)
  if (!validatedData.success) {
    return {
      ok: false,
      status: 400,
      message: 'Dados enviados de forma incorreta',
    }
  }

  const { name, email, password } = validatedData.data

  try {
    const hashedPassword = await hash(password, 10)
    await adminsRepository.create(email, hashedPassword, name)
  } catch (e) {
    return { ok: false, status: 500, message: 'Error interno ao registrar' }
  }

  return { ok: true, status: 200 }
}
