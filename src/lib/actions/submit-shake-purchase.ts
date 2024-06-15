'use server'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { ActionParams } from '@premieroctet/next-admin'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'
import { NextAdminRepository } from '@/server/prisma/repositories/next-admin-repository'

export const submitShakePurchase = async (
  params: ActionParams,
  formData: FormData,
  customersRepository: CustomersRepository,
  nextAdminRepository: NextAdminRepository,
) => {
  const customerId = Number(formData.get('customer'))
  const lastShakeAwardRound =
    await customersRepository.getLastShakeAwardRound(customerId)
  const createdAt = new Date()
  formData.append('createdAt', createdAt.toISOString())

  if (lastShakeAwardRound === null) {
    return nextAdminRepository.updateShakeAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    })
  }

  const finalShakeAwardRound = getFinalAwardRoundDate(lastShakeAwardRound, 30)

  const purchaseCountInARound =
    await customersRepository.getShakePurchaseCountInARound(
      customerId,
      lastShakeAwardRound,
      finalShakeAwardRound,
    )

  if (purchaseCountInARound >= 10) {
    const award = await customersRepository.getCustomerAward(
      customerId,
      lastShakeAwardRound,
      'shake',
    )
    if (award === null) {
      return {
        created: false,
        error: 'Cliente elegível, adicionar prêmio',
      }
    }
    return nextAdminRepository.updateShakeAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    })
  }
  if (createdAt > finalShakeAwardRound) {
    return nextAdminRepository.updateShakeAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    })
  }
  return nextAdminRepository.submitForm(params, formData)
}
