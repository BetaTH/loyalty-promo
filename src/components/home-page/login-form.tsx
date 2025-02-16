'use client'

import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useToast } from '@/lib/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { ButtonLoading } from '../ui/button-loading'
import { useServerAction } from 'zsa-react'
import { signIn } from '@/lib/actions/sign-in'

export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const { isPending, executeFormAction } = useServerAction(signIn, {
    onError: ({ err }) => {
      if (err.name === 'ZodError') {
        toast({ title: 'Erro de validação', variant: 'destructive' })
      } else {
        toast({ title: 'Erro Interno no Servidor', variant: 'destructive' })
      }
    },
    onSuccess: ({ data }) => {
      if (data.ok === false) {
        toast({ title: data.message, variant: 'destructive' })
      }
      if (data.ok === true) {
        router.replace('/meus-pontos')
      }
    },
  })
  return (
    <div className="flex flex-col w-full sm:sm:w-[23.24rem] p-5 py-8 bg-black sm:p-8 rounded-xl sm:rounded-lg shadow-md shadow-white/10">
      <div className="space-y-5">
        <p className="sm:text-2xl text-xl font-normal">Já Possui Cadastro?</p>
        <form className="space-y-5" action={executeFormAction}>
          <div className="space-y-1">
            <Label className="sm:text-xl ">Email</Label>
            <Input name="email" className="sm:text-2xl" required />
          </div>
          <div className="space-y-1">
            <Label className="sm:text-xl ">CPF</Label>
            <Input name="cpf" className="sm:text-2xl" required />
          </div>
          <ButtonLoading
            isLoading={isPending}
            className="w-full sm:text-xl text-black"
            disabled={isPending}
          >
            Entrar
          </ButtonLoading>
        </form>
      </div>
    </div>
  )
}
