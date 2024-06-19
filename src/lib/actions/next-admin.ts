'use server'

import { ActionParams, ModelName } from '@premieroctet/next-admin'
import { SearchPaginatedResourceParams } from '@premieroctet/next-admin/dist/actions'
import { getSession } from '../sessions'
import { submitShakePurchase } from './submit-shake-purchase'
import { submitShakeAward } from './submit-shake-award'
import { NextAdminRepository } from '../../server/prisma/repositories/next-admin-repository'
import { CustomersRepository } from '@/server/prisma/repositories/customers-repository'

export const submitFormAction = async (
  params: ActionParams,
  formData: FormData,
) => {
  const session = await getSession()
  if (!session.hasSession) {
    return
  }
  if (session.role !== 'ADMIN') {
    return
  }

  const nextAdminRepository = new NextAdminRepository()
  const customersRepository = new CustomersRepository()

  if (params.params?.includes('purchase') && params.params?.includes('new')) {
    const type = formData.get('type')
    if (type === 'shake') {
      return submitShakePurchase(
        params,
        formData,
        customersRepository,
        nextAdminRepository,
      )
    }
    if (type === 'comum') {
      return nextAdminRepository.submitForm(params, formData)
    }
  }

  if (params.params?.includes('award') && params.params?.includes('new')) {
    const type = formData.get('type')
    if (type === 'shake') {
      return submitShakeAward(
        params,
        formData,
        customersRepository,
        nextAdminRepository,
      )
    }
    if (type === 'comum') {
      return nextAdminRepository.submitForm(params, formData)
    }
  }

  return nextAdminRepository.submitForm(params, formData)
}

export const deleteItem = async (
  model: ModelName,
  ids: string[] | number[],
) => {
  const session = await getSession()
  if (!session.hasSession) {
    return
  }
  if (session.role !== 'ADMIN') {
    return
  }
  const nextAdminRepository = new NextAdminRepository()
  return nextAdminRepository.deleteResourceItems(model, ids)
}

export const searchResource = async (
  actionParams: ActionParams,
  params: SearchPaginatedResourceParams,
) => {
  const session = await getSession()
  if (!session.hasSession) {
    return {
      data: [],
      total: 0,
      error: null,
    }
  }
  if (session.role !== 'ADMIN') {
    return {
      data: [],
      total: 0,
      error: null,
    }
  }
  const nextAdminRepository = new NextAdminRepository()
  return nextAdminRepository.searchPaginatedResource(actionParams, params)
}