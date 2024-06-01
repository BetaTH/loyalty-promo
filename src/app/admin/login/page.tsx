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
export default function AdminLogin() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-4">
      <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5">
        <CardHeader className="sm:w-96">
          <CardTitle className="sm:text-4xl">Acesso do Admin</CardTitle>
          <CardDescription className="sm:text-lg">
            Faça login com usuário e senha!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label className="sm:text-xl">Usuário</Label>
            <Input name="username" className="sm:text-2xl" type="text" />
          </div>
          <div className="space-y-1">
            <Label className="sm:text-xl">Senha</Label>
            <Input name="password" className="sm:text-2xl" type="password" />
          </div>
          <Button className="w-full sm:text-xl text-black">Entrar</Button>
        </CardContent>
      </Card>
    </main>
  )
}
