'use server'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { getSession } from '../sessions'
import { getFinalAwardRoundDate } from '../functions/get-final-round-date'

export async function getCustomerStats() {
  const session = await getSession()
  if (!session.hasSession) {
    return null
  }
  if (session.role !== 'COMMON') {
    return null
  }

  const customerId = Number(session.sub)
  const customersRepository = new CustomersRepository()
  const customer = await customersRepository.getCustomerById(customerId)

  if (!customer) {
    return null
  }
  const customerResponse = {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  }

  const lastShakeAwardRound = customer.lastShakeAwardRound

  if (lastShakeAwardRound === null) {
    return {
      customer: customerResponse,
      shakeCount: 0,
    }
  }
  const dateNow = new Date()
  const finalShakeAwardRound = getFinalAwardRoundDate(lastShakeAwardRound, 30)
  const purchaseCountInARound =
    await customersRepository.getShakePurchaseCountInARound(
      customerId,
      lastShakeAwardRound,
      finalShakeAwardRound,
    )

  if (purchaseCountInARound < 10 && dateNow > finalShakeAwardRound) {
    return {
      customer: customerResponse,
      shakeCount: 0,
    }
  }

  return {
    customer: customerResponse,
    shakeCount: purchaseCountInARound,
  }
}
