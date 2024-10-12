'use server'

import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'
import { getSession } from '../sessions'

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
  const customerStats =
    await customersRepository.getCustomerLoyaltyStats(customerId)

  return customerStats
}
