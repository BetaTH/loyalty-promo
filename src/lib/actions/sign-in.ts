'use server'

import { z } from 'zod'

const signInDataSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string(),
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
