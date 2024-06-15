'use server'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { ActionParams } from '@premieroctet/next-admin'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'
import { NextAdminRepository } from '@/server/prisma/repositories/next-admin-repository'

export const submitShakeAward = async (
  params: ActionParams,
  formData: FormData,
  customersRepository: CustomersRepository,
  nextAdminRepository: NextAdminRepository,
) => {
  const customerId = Number(formData.get('customer'))

  const lastShakeAwardRound =
    await customersRepository.getLastShakeAwardRound(customerId)

  if (lastShakeAwardRound === null) {
    return {
      created: false,
      error: 'Só possível adicionar prêmios para clientes elegíveis',
    }
  }

  const finalShakeAwardRound = getFinalAwardRoundDate(lastShakeAwardRound, 30)

  const purchaseCountInARound =
    await customersRepository.getShakePurchaseCountInARound(
      customerId,
      lastShakeAwardRound,
      finalShakeAwardRound,
    )

  if (purchaseCountInARound < 10) {
    return {
      created: false,
      error: 'Só possível adicionar prêmios para clientes elegíveis',
    }
  }
  formData.append('awardRoundStartedAt', lastShakeAwardRound.toISOString())

  return nextAdminRepository.updateShakeAwardRoundWithAward(
    params,
    formData,
    customerId,
  )
}
