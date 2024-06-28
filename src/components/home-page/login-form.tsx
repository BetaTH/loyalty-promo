'use client'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { signIn } from '@/lib/actions/sign-in'
import { useToast } from '@/lib/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()

  const [signInState, signInFormAction, isPending] = useFormState(signIn, {})

  useEffect(() => {
    if (signInState.ok === false) {
      toast({ title: signInState.message, variant: 'destructive' })
    }
    if (signInState.ok === true) {
      router.replace('/meus-pontos')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInState])
  return (
    <form className="space-y-5" action={signInFormAction}>
      <div className="space-y-1">
        <Label className="sm:text-xl ">Email</Label>
        <Input name="email" className="sm:text-2xl" required />
      </div>
      <div className="space-y-1">
        <Label className="sm:text-xl ">CPF</Label>
        <Input name="cpf" className="sm:text-2xl" required />
      </div>
      <Button className="w-full sm:text-xl text-black" disabled={isPending}>
        Entrar
      </Button>
    </form>
  )
}
