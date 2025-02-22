'use server'

import { CustomersRepository } from '@/db/prisma/repositories/customers-repository'
import { ActionParams } from '@premieroctet/next-admin'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'
import { NextAdminRepository } from '@/db/prisma/repositories/next-admin-repository'
import { CardLoyaltyRepository } from '@/db/prisma/repositories/card-loyalt-repository'

export const submitSmoothiePurchase = async (
  params: ActionParams,
  formData: FormData,
  customersRepository: CustomersRepository,
  cardLoyaltyRepository: CardLoyaltyRepository,
  nextAdminRepository: NextAdminRepository,
) => {
  const customerId = Number(formData.get('customer'))
  const createdAt = new Date()
  const smoothieCard =
    await cardLoyaltyRepository.getSmoothieCardWithAValidRound(
      customerId,
      createdAt,
    )
  formData.append('createdAt', createdAt.toISOString())

  const updatedSmoothieCard = {
    ...smoothieCard,
    roundStartAt: createdAt,
    roundEndAt: getFinalAwardRoundDate(createdAt, 30),
    points: 1,
  }

  if (
    smoothieCard.roundStartAt === null ||
    smoothieCard.roundEndAt === null ||
    smoothieCard.points <= 0
  ) {
    return nextAdminRepository.updateCardLoyalty({
      params,
      formData,
      cardLoyalty: updatedSmoothieCard,
    })
  }

  if (smoothieCard.points >= 10) {
    const award = await customersRepository.getCustomerAward(
      customerId,
      smoothieCard.roundStartAt,
      'smoothie',
    )
    if (award === null) {
      return {
        created: false,
        error: 'Cliente elegível, adicionar prêmio',
      }
    }
    return nextAdminRepository.updateCardLoyalty({
      params,
      formData,
      cardLoyalty: updatedSmoothieCard,
    })
  }

  return nextAdminRepository.updateCardLoyalty({
    params,
    formData,
    cardLoyalty: { ...smoothieCard, points: smoothieCard.points + 1 },
  })
}
