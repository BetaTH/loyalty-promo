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

  async getUserLoyaltyStats(id: number) {
    const shakeCount = await prisma.purchase.count({
      where: {
        user_id: id,
        type: 'shake',
        isGift: false,
      },
    })
    const shakeGiftCount = await prisma.purchase.count({
      where: {
        user_id: id,
        type: 'shake',
        isGift: true,
      },
    })

    const adjustedShakeCount = shakeCount - shakeGiftCount * 10
    const finalShakeCount =
      adjustedShakeCount > 10 ? adjustedShakeCount % 10 : adjustedShakeCount
    return {
      shakeCount: finalShakeCount,
    }
  }
}
