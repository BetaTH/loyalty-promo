import { prisma } from '..'

export class CustomersRepository {
  constructor() {}

  async getCustomerByEmailAndCPF(email: string, cpf: string) {
    const customer = await prisma.customer.findUnique({
      where: {
        email,
        cpf,
      },
    })
    return customer
  }

  async getCustomerById(id: number) {
    const customer = await prisma.customer.findUnique({
      where: {
        id,
      },
    })
    return customer
  }

  async getCustomerAward(
    customerId: number,
    awardRoundStartedAt: Date,
    type: 'smoothie' | 'suplemento',
  ) {
    const award = await prisma.award.findFirst({
      where: {
        type,
        customerId,
        awardRoundStartedAt,
      },
    })
    return award
  }

  async getCustomersRounds(date: Date) {
    const award = await prisma.customer.findMany({
      where: {
        cardLoyalty: {
          every: {
            OR: [
              {
                roundEndAt: {
                  gte: date,
                },
              },
              {
                points: {
                  gte: 10,
                },
              },
            ],
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        cardLoyalty: {
          select: {
            points: true,
          },
        },
      },
    })
    return award
  }
}
