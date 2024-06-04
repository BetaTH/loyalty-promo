import { prisma } from '..'

export class UsersRepository {
  async getUserByEmailAndCPF(email: string, cpf: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
        cpf,
      },
    })
    return user
  }
}
