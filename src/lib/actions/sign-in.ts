'use server'
import { z } from 'zod'

import { UsersRepository } from '@/server/prisma/repositories/users-repository'

import { createSession } from '../sessions'

const signInDataSchema = z.object({
  email: z.string().email(),
  cpf: z.string(),
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
    cpf: formData.get('cpf'),
  }

  const validatedData = signInDataSchema.safeParse(rawFormData)
  if (!validatedData.success) {
    return {
      ok: false,
      status: 400,
      message: 'Dados enviados de forma incorreta',
    }
  }

  const { email, cpf } = validatedData.data
  const usersRepository = new UsersRepository()
  const user = await usersRepository.getUserByEmailAndCPF(email, cpf)

  if (!user) {
    return {
      ok: false,
      status: 400,
      message: 'Credenciais Invalidas',
    }
  }
  createSession({
    sub: String(user.id),
    email: user.email,
    name: user.name,
    role: 'COMMON',
  })
  return { ok: true, status: 200 }
}
