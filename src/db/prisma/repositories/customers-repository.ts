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

  async getCustomerLoyaltyStats(id: number) {
    const user = await prisma.customer.findUnique({
      where: {
        id,
      },
    })
    const smoothieCount = await prisma.purchase.count({
      where: {
        customerId: id,
        type: 'smoothie',
      },
    })
    const smoothieGiftCount = await prisma.purchase.count({
      where: {
        customerId: id,
        type: 'smoothie',
      },
    })

    const adjustedSmoothieCount = smoothieCount - smoothieGiftCount * 10
    const finalSmoothieCount =
      adjustedSmoothieCount > 10
        ? adjustedSmoothieCount % 10
        : adjustedSmoothieCount
    return {
      user: {
        name: user!.name,
        email: user!.email,
        phoneNumber: user!.phoneNumber,
      },
      smoothieCount: finalSmoothieCount,
    }
  }

  async getSmoothiePurchaseCountInARound(
    customerId: number,
    initRoundDate: Date,
    finalRoundDate: Date,
  ) {
    return await prisma.purchase.count({
      where: {
        customerId: Number(customerId),
        type: 'smoothie',
        createdAt: {
          gte: initRoundDate,
          lte: finalRoundDate,
        },
      },
    })
  }

  async getLastSmoothieAwardRound(customerId: number) {
    const { lastSmoothieAwardRound } = (await prisma.customer.findUnique({
      where: {
        id: Number(customerId),
      },
      select: {
        lastSmoothieAwardRound: true,
      },
    }))!
    return lastSmoothieAwardRound
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
}
