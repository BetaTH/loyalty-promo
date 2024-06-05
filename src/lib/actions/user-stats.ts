'use server'

import { UsersRepository } from '@/server/prisma/repositories/users-repository'
import { getSession } from '../sessions'

export async function getUserStats() {
  const session = await getSession()
  if (!session.hasSession) {
    return null
  }
  if (session.role !== 'COMMON') {
    return null
  }

  const userId = Number(session.sub)

  const usersRepository = new UsersRepository()
  const userStats = await usersRepository.getUserLoyaltyStats(userId)

  return userStats
}
