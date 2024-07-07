"use client";
import { useRouter } from "next/navigation";
import { useServerAction } from "zsa-react";

import { Layout } from "@/components/layout/layout";
import { LayoutCenter } from "@/components/layout/layout-center";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/actions/auth-admin-user";
import { useToast } from "@/lib/hooks/use-toast";

export default function AdminLogin() {
  const router = useRouter();
  const { toast } = useToast();

  const { isPending, executeFormAction } = useServerAction(signIn, {
    onError: ({ err }) => {
      if (err.name === "ZodError") {
        toast({ title: "Erro de validação", variant: "destructive" });
      } else {
        toast({ title: "Erro Interno no Servidor", variant: "destructive" });
      }
    },
    onSuccess: ({ data }) => {
      if (data.ok === false) {
        toast({ title: data.message, variant: "destructive" });
      }
      if (data.ok === true) {
        router.replace("/admin");
      }
    },
  });

  return (
    <Layout withHeader={false} withFooter={false}>
      <LayoutCenter className="h-full">
        <Card className="rounded-lg shadow-md shadow-white/10 sm:p-5 w-full sm:w-fit">
          <CardHeader className="sm:w-96">
            <CardTitle className="text-3xl sm:text-4xl">
              Acesso do Admin
            </CardTitle>
            <CardDescription className="sm:text-lg">
              Faça login com usuário e senha!
            </CardDescription>
          </CardHeader>
          <form action={executeFormAction}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label className="sm:text-xl">Email</Label>
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
              <ButtonLoading
                className="w-full sm:text-xl text-black"
                disabled={isPending}
                isLoading={isPending}
              >
                Entrar
              </ButtonLoading>
            </CardContent>
          </form>
        </Card>
      </LayoutCenter>
    </Layout>
  );
}
