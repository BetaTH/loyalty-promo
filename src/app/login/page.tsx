import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Home() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-4 ">
      <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5">
        <CardHeader className="sm:w-96">
          <CardTitle className="sm:text-4xl">Acesse sua conta</CardTitle>
          <CardDescription className="sm:text-lg">
            Faça login com seu CPF e número de celular!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="sm:text-xl">CPF</Label>
            <Input name="cpf" className="sm:text-2xl" />
          </div>
          <div className="space-y-2">
            <Label className="sm:text-xl">Número de Celular</Label>
            <Input name="phoneNumber" className="sm:text-2xl" />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
