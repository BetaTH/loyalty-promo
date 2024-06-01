'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/lib/actions/sign-in'
import { signUp } from '@/lib/actions/sign-up'
import { useToast } from '@/lib/hooks/use-toast'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

export default function Home() {
  const { toast } = useToast()

  const [signInState, signInFormAction] = useFormState(signIn, {})
  const [signUpState, signUpFormAction] = useFormState(signUp, {})

  useEffect(() => {
    if (signInState.ok === false) {
      toast({ title: 'Credenciais Invalidas', variant: 'destructive' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInState])

  useEffect(() => {
    if (signUpState.ok === false) {
      toast({ title: 'Credenciais Invalidas', variant: 'destructive' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpState])

  return (
    <main className="min-h-dvh flex items-center justify-center px-4">
      <Dialog>
        <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5">
          <CardHeader className="sm:w-96">
            <CardTitle className="sm:text-4xl">Acesse sua conta</CardTitle>
            <CardDescription className="sm:text-lg">
              Faça login com seu CPF e número de celular!
            </CardDescription>
          </CardHeader>
          <form action={signInFormAction}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label className="sm:text-xl">Email</Label>
                <Input name="email" className="sm:text-2xl" required />
              </div>
              <div className="space-y-1">
                <Label className="sm:text-xl">Telefone Celular</Label>
                <Input name="phoneNumber" className="sm:text-2xl" required />
              </div>
              <Button className="w-full sm:text-xl text-black">Entrar</Button>
              <DialogTrigger asChild>
                <Button className="w-full sm:text-xl" variant="secondary">
                  Cadastrar-se
                </Button>
              </DialogTrigger>
            </CardContent>
          </form>
        </Card>
        <DialogContent className="w-[20rem] sm:w-full sm:max-w-fit">
          <DialogHeader className="sm:w-96">
            <DialogTitle className="sm:text-4xl">Cadastre-se</DialogTitle>
            <DialogDescription className="sm:text-lg">
              Crie um acesso para poder participar da promoção.
            </DialogDescription>
          </DialogHeader>
          <form action={signUpFormAction}>
            <div className="space-y-4">
              <div className="space-y-1">
                <Input
                  name="name"
                  placeholder="Nome*"
                  className="sm:text-2xl"
                />
              </div>
              <div className="space-y-1 flex flex-col justify-between">
                <Input name="cpf" placeholder="CPF*" className="sm:text-2xl" />
              </div>
              <div className="space-y-1">
                <Input
                  name="email"
                  placeholder="E-mail*"
                  className="sm:text-2xl"
                />
              </div>
              <div className="space-y-1">
                <Input
                  name="phoneNumber"
                  placeholder="Telefone Celular*"
                  className="sm:text-2xl"
                />
              </div>
              <Button className="w-full sm:text-xl text-black">
                Cadastrar-se
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  )
}
