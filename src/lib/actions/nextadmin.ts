'use server'

import { prisma } from '@/server/prisma'
import { ActionParams, ModelName } from '@premieroctet/next-admin'
import {
  SearchPaginatedResourceParams,
  deleteResourceItems,
  searchPaginatedResource,
  submitForm,
} from '@premieroctet/next-admin/dist/actions'
import { getSession } from '../sessions'
import { options } from '@/next-admin-options'
import { submitShakePurchase } from './submit-shake-purchase'
import { submitShakeAward } from './submit-shake-award'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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

  if (params.params?.includes('purchase') && params.params?.includes('new')) {
    const type = formData.get('type')
    if (type === 'shake') {
      return submitShakePurchase(params, formData)
    }
    if (type === 'common') {
      return submitForm({ ...params, options, prisma }, formData)
    }
  }

  if (params.params?.includes('award') && params.params?.includes('new')) {
    const type = formData.get('type')
    if (type === 'shake') {
      return submitShakeAward(params, formData)
    }
    if (type === 'common') {
      return submitForm({ ...params, options, prisma }, formData)
    }
  }

  return submitForm({ ...params, options, prisma }, formData)
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
  return deleteResourceItems(prisma, model, ids)
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
  return searchPaginatedResource({ ...actionParams, options, prisma }, params)
}

export const submitEmail = async (
  model: ModelName,
  ids: number[] | string[],
) => {
  const session = await getSession()
  if (!session.hasSession) {
    return
  }
  if (session.role !== 'ADMIN') {
    return
  }
  console.log('Sending email to ' + ids.length + ' users')
  await delay(1000)
}
