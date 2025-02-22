import { prisma } from '..'

export class AdminsRepository {
  async getUserByEmail(email: string) {
    const adminUser = await prisma.adminUser.findUnique({
      where: {
        email,
      },
    })
    return adminUser
  }

  async getFirst() {
    const adminUser = await prisma.adminUser.findFirst()
    return adminUser
  }

  async create(email: string, password: string, name: string) {
    const adminUser = await prisma.adminUser.create({
      data: {
        email,
        password,
        name,
      },
    })
    return adminUser
  }
}
