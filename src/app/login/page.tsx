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
import { DialogTrigger } from '@radix-ui/react-dialog'

export default function Home() {
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
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label className="sm:text-xl">CPF</Label>
              <Input name="cpf" className="sm:text-2xl" />
            </div>
            <div className="space-y-1">
              <Label className="sm:text-xl">Telefone Celular</Label>
              <Input name="phoneNumber" className="sm:text-2xl" />
            </div>
            <Button className="w-full sm:text-xl text-black">Entrar</Button>
            <DialogTrigger asChild>
              <Button className="w-full sm:text-xl" variant="secondary">
                Cadastrar-se
              </Button>
            </DialogTrigger>
          </CardContent>
        </Card>
        <DialogContent className="w-[20rem] sm:w-full sm:max-w-fit">
          <DialogHeader className="sm:w-96">
            <DialogTitle className="sm:text-4xl">Cadastre-se</DialogTitle>
            <DialogDescription className="sm:text-lg">
              Crie um acesso para poder participar da promoção.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1">
              <Input name="name" placeholder="Nome*" className="sm:text-2xl" />
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
        </DialogContent>
      </Dialog>
    </main>
  )
}
