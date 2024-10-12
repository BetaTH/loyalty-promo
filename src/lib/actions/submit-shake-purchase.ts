'use server'

import { options } from '@/next-admin-options'
import { prisma } from '@/server/prisma'
import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { ActionParams } from '@premieroctet/next-admin'
import { submitForm } from '@premieroctet/next-admin/dist/actions'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'

export const submitShakePurchase = async (
  params: ActionParams,
  formData: FormData,
) => {
  const customersRepository = new CustomersRepository()
  const customerId = Number(formData.get('customer'))
  const lastShakeAwardRound =
    await customersRepository.getLastShakeAwardRound(customerId)
  const createdAt = new Date()
  formData.append('createdAt', createdAt.toISOString())

  if (lastShakeAwardRound === null) {
    return updateShakeAwardRoundWithPurchase(
      params,
      formData,
      customerId,
      createdAt,
    )
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
    return updateShakeAwardRoundWithPurchase(
      params,
      formData,
      customerId,
      createdAt,
    )
  }
  if (createdAt > finalShakeAwardRound) {
    return updateShakeAwardRoundWithPurchase(
      params,
      formData,
      customerId,
      createdAt,
    )
  }

  return await submitForm({ ...params, options, prisma }, formData)
}

export const updateShakeAwardRoundWithPurchase = async (
  params: ActionParams,
  formData: FormData,
  customerId: number,
  createdAt: Date,
) => {
  return prisma.$transaction(async (tx) => {
    await tx.customer.update({
      where: {
        id: customerId,
      },
      data: {
        lastShakeAwardRound: createdAt,
      },
    })
    return await submitForm(
      { ...params, options, prisma: tx as typeof prisma },
      formData,
    )
  })
}
