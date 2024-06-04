'use server'
import bcrypt, { compare } from 'bcryptjs'
import { z } from 'zod'

import { prisma } from '@/server/prisma'
import { AdminsRepository } from '@/server/prisma/repositories/admins-repository'
import { ActionParams, ModelName } from '@premieroctet/next-admin'
import {
  SearchPaginatedResourceParams,
  deleteResourceItems,
  searchPaginatedResource,
  submitForm,
} from '@premieroctet/next-admin/dist/actions'

import { createSession } from '../sessions'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const submitFormAction = async (
  params: ActionParams,
  formData: FormData,
) => {
  return submitForm(
    { ...params, options: { basePath: '/admin' }, prisma },
    formData,
  )
}

export const deleteItem = async (
  model: ModelName,
  ids: string[] | number[],
) => {
  return deleteResourceItems(prisma, model, ids)
}

export const searchResource = async (
  actionParams: ActionParams,
  params: SearchPaginatedResourceParams,
) => {
  return searchPaginatedResource(
    { ...actionParams, options: { basePath: '/admin' }, prisma },
    params,
  )
}

export const submitEmail = async (
  model: ModelName,
  ids: number[] | string[],
) => {
  console.log('Sending email to ' + ids.length + ' users')
  await delay(1000)
}

interface SignInState {
  ok?: boolean | undefined
  status?: number | undefined
  message?: string | undefined
}

const signInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const signIn = async (
  _: SignInState,
  formData: FormData,
): Promise<SignInState> => {
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

const signUpDataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

interface SignUpState {
  ok?: boolean | undefined
  status?: number | undefined
  message?: string | undefined
}

export const firstSignUp = async (
  _: SignInState,
  formData: FormData,
): Promise<SignUpState> => {
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

  const validatedData = signUpDataSchema.safeParse(rawFormData)
  if (!validatedData.success) {
    return {
      ok: false,
      status: 400,
      message: 'Dados enviados de forma incorreta',
    }
  }

  const { name, email, password } = validatedData.data

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await adminsRepository.create(email, hashedPassword, name)
  } catch (e) {
    return { ok: false, status: 500, message: 'Error interno ao registrar' }
  }

  return { ok: true, status: 200 }
}
