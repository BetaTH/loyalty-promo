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
    const shakeCount = await prisma.purchase.count({
      where: {
        customerId: id,
        type: 'shake',
      },
    })
    const shakeGiftCount = await prisma.purchase.count({
      where: {
        customerId: id,
        type: 'shake',
      },
    })

    const adjustedShakeCount = shakeCount - shakeGiftCount * 10
    const finalShakeCount =
      adjustedShakeCount > 10 ? adjustedShakeCount % 10 : adjustedShakeCount
    return {
      user: {
        name: user!.name,
        email: user!.email,
        phoneNumber: user!.phoneNumber,
      },
      shakeCount: finalShakeCount,
    }
  }

  async getShakePurchaseCountInARound(
    customerId: number,
    initRoundDate: Date,
    finalRoundDate: Date,
  ) {
    return await prisma.purchase.count({
      where: {
        customerId: Number(customerId),
        type: 'shake',
        createdAt: {
          gte: initRoundDate,
          lte: finalRoundDate,
        },
      },
    })
  }

  async getLastShakeAwardRound(customerId: number) {
    const { lastShakeAwardRound } = (await prisma.customer.findUnique({
      where: {
        id: Number(customerId),
      },
      select: {
        lastShakeAwardRound: true,
      },
    }))!
    return lastShakeAwardRound
  }

  async getCustomerAward(
    customerId: number,
    awardRoundStartedAt: Date,
    type: 'shake' | 'comum',
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
