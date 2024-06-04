'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { firstSignUp } from '@/lib/actions/auth-admin-user'
import { useToast } from '@/lib/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
export default function AdminLogin() {
  const router = useRouter()
  const { toast } = useToast()

  const [firstSignUpState, firstSignUpFormAction, isPending] = useFormState(
    firstSignUp,
    {},
  )

  useEffect(() => {
    if (firstSignUpState.ok === false) {
      toast({ title: firstSignUpState.message, variant: 'destructive' })
    }
    if (firstSignUpState.ok === true) {
      router.replace('/admin/login')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstSignUpState])
  return (
    <main className="min-h-dvh flex items-center justify-center px-4">
      <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5">
        <CardHeader className="sm:w-96">
          <CardTitle className="sm:text-4xl">
            Primeiro Acesso de Admin!
          </CardTitle>
          <CardDescription className="sm:text-lg">
            Crie sua conta como administrador!
          </CardDescription>
        </CardHeader>
        <form action={firstSignUpFormAction}>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label className="sm:text-xl">Nome</Label>
              <Input name="name" className="sm:text-2xl" type="text" />
            </div>
            <div className="space-y-1">
              <Label className="sm:text-xl">email</Label>
              <Input name="email" className="sm:text-2xl" type="text" />
            </div>
            <div className="space-y-1">
              <Label className="sm:text-xl">Senha</Label>
              <Input name="password" className="sm:text-2xl" type="password" />
            </div>
            <Button
              className="w-full sm:text-xl text-black"
              disabled={isPending}
            >
              Registrar
            </Button>
          </CardContent>
        </form>
      </Card>
    </main>
  )
}
