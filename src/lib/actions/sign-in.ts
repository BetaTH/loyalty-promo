'use server'
import { z } from 'zod'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'

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
  const customersRepository = new CustomersRepository()
  const customer = await customersRepository.getCustomerByEmailAndCPF(
    email,
    cpf,
  )

  if (!customer) {
    return {
      ok: false,
      status: 400,
      message: 'Credenciais Invalidas',
    }
  }
  createSession({
    sub: String(customer.id),
    email: customer.email,
    name: customer.name,
    role: 'COMMON',
  })
  return { ok: true, status: 200 }
}
