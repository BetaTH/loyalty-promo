'use client'
import { Layout } from '@/components/layout/layout'
import { LayoutCenter } from '@/components/layout/layout-center'
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
import { signIn } from '@/lib/actions/auth-admin-user'
import { useToast } from '@/lib/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
export default function AdminLogin() {
  const router = useRouter()
  const { toast } = useToast()

  const [signInState, signInFormAction, isPending] = useFormState(signIn, {})

  useEffect(() => {
    if (signInState.ok === false) {
      toast({ title: signInState.message, variant: 'destructive' })
    }
    if (signInState.ok === true) {
      router.replace('/admin')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInState])
  return (
    <Layout withHeader={false}>
      <LayoutCenter>
        <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5 w-full sm:w-fit">
          <CardHeader className="sm:w-96">
            <CardTitle className="text-3xl sm:text-4xl">
              Acesso do Admin
            </CardTitle>
            <CardDescription className="sm:text-lg">
              Faça login com usuário e senha!
            </CardDescription>
          </CardHeader>
          <form action={signInFormAction}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label className="sm:text-xl">email</Label>
                <Input name="email" className="sm:text-2xl" type="text" />
              </div>
              <div className="space-y-1">
                <Label className="sm:text-xl">Senha</Label>
                <Input
                  name="password"
                  className="sm:text-2xl"
                  type="password"
                />
              </div>
              <Button
                className="w-full sm:text-xl text-black"
                disabled={isPending}
              >
                Entrar
              </Button>
            </CardContent>
          </form>
        </Card>
      </LayoutCenter>
    </Layout>
  )
}
