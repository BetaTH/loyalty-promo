'use server'
import { z } from 'zod'
import { createServerAction } from 'zsa'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'

import { createSession } from '../sessions'

const signInDataSchema = z.object({
  email: z.string().email(),
  cpf: z.string(),
})

export const signIn = createServerAction()
  .input(signInDataSchema, {
    type: 'formData',
  })
  .handler(handler)

async function handler({
  input: { email, cpf },
}: {
  input: z.infer<typeof signInDataSchema>
}) {
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
