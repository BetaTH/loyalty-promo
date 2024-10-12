'use server'

import { options } from '@/next-admin-options'
import { prisma } from '@/server/prisma'
import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { ActionParams } from '@premieroctet/next-admin'
import { submitForm } from '@premieroctet/next-admin/dist/actions'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'

export const submitShakeAward = async (
  params: ActionParams,
  formData: FormData,
) => {
  const customerId = Number(formData.get('customer'))

  const customersRepository = new CustomersRepository()
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

  return await updateShakeAwardRoundWithAward(params, formData, customerId)
}

export const updateShakeAwardRoundWithAward = async (
  params: ActionParams,
  formData: FormData,
  customerId: number,
) => {
  return prisma.$transaction(async (tx) => {
    await tx.customer.update({
      where: {
        id: customerId,
      },
      data: {
        lastShakeAwardRound: null,
      },
    })
    return await submitForm(
      { ...params, options, prisma: tx as typeof prisma },
      formData,
    )
  })
}
