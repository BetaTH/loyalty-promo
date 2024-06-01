'use server'

import { z } from 'zod'

const signInDataSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
})

interface SignUpState {
  ok?: boolean | undefined
  status?: number | undefined
  message?: string | undefined
}

export async function signUp(
  _: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const rawFormData = {
    name: formData.get('name'),
    cpf: formData.get('cpf'),
    email: formData.get('email'),
    phoneNumber: formData.get('phoneNumber'),
  }

  const validatedData = signInDataSchema.safeParse(rawFormData)
  if (!validatedData.success) {
    return {
      ok: false,
      status: 400,
      message: 'Credenciais Invalidas',
    }
  }

  console.log(validatedData.data)

  return { ok: true, status: 200 }
}
