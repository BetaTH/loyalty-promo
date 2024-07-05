"use server";
import { compare, hash } from "bcryptjs";
import { z } from "zod";
import { createServerAction } from "zsa";
import { createSession } from "../sessions";
import { AdminsRepository } from "@/db/prisma/repositories/admins-repository";

const signInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signIn = createServerAction()
  .input(signInDataSchema, {
    type: "formData",
  })
  .handler(
    async ({
      input: { email, password },
    }: {
      input: z.infer<typeof signInDataSchema>;
    }) => {
      const adminsRepository = new AdminsRepository();
      const admin = await adminsRepository.getUserByEmail(email);

      if (!admin) {
        return {
          ok: false,
          status: 400,
          message: "Credenciais Invalidas",
        };
      }
      const doesPasswordMatches = await compare(password, admin.password);

      if (!doesPasswordMatches) {
        return {
          ok: false,
          status: 400,
          message: "Credenciais Invalidas",
        };
      }

      createSession({
        sub: String(admin.id),
        email: admin.email,
        name: admin.name,
        role: "ADMIN",
      });

      return { ok: true, status: 200 };
    }
  );

const firstSignUpDataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const firstSignUp = createServerAction()
  .input(firstSignUpDataSchema, {
    type: "formData",
  })
  .handler(
    async ({
      input: { name, email, password },
    }: {
      input: z.infer<typeof firstSignUpDataSchema>;
    }) => {
      const adminsRepository = new AdminsRepository();

      try {
        const adminExists = await adminsRepository.getFirst();
        if (adminExists) {
          return {
            ok: false,
            status: 401,
            message: "Não autorizado",
          };
        }
      } catch (e) {
        return {
          ok: false,
          status: 500,
          message: "Error interno ao registrar",
        };
      }

      try {
        const hashedPassword = await hash(password, 10);
        await adminsRepository.create(email, hashedPassword, name);
      } catch (e) {
        return {
          ok: false,
          status: 500,
          message: "Error interno ao registrar",
        };
      }

      return { ok: true, status: 200 };
    }
  );
