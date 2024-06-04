'use server'
import { prisma } from '@/server/prisma'
import { ActionParams, ModelName } from '@premieroctet/next-admin'
import {
  SearchPaginatedResourceParams,
  deleteResourceItems,
  searchPaginatedResource,
  submitForm,
} from '@premieroctet/next-admin/dist/actions'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const submitFormAction = async (
  params: ActionParams,
  formData: FormData,
) => {
  return submitForm(
    { ...params, options: { basePath: '/admin' }, prisma },
    formData,
  )
}

export const deleteItem = async (
  model: ModelName,
  ids: string[] | number[],
) => {
  return deleteResourceItems(prisma, model, ids)
}

export const searchResource = async (
  actionParams: ActionParams,
  params: SearchPaginatedResourceParams,
) => {
  return searchPaginatedResource(
    { ...actionParams, options: { basePath: '/admin' }, prisma },
    params,
  )
}

export const submitEmail = async (
  model: ModelName,
  ids: number[] | string[],
) => {
  console.log('Sending email to ' + ids.length + ' users')
  await delay(1000)
}
