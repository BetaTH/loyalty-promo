import { AdminsRepository } from '@/server/prisma/repositories/admins-repository'
import { NextResponse } from 'next/server'

export async function GET() {
  const adminsRepository = new AdminsRepository()
  const adminExists = await adminsRepository.getFirst()

  return NextResponse.json({ adminExists: !!adminExists })
}
