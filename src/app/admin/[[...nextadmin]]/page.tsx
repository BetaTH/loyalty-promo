import { NextAdmin } from '@premieroctet/next-admin'
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter'
import schema from '../../../../prisma/json-schema/json-schema.json'
import { prisma } from '@/lib/prisma'
import {
  deleteItem,
  searchResource,
  submitFormAction,
} from '@/lib/actions/nextadmin'
import '../../globals.css'

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] }
  searchParams: { [key: string]: string | string[] | undefined } | undefined
}) {
  const props = await getPropsFromParams({
    params: params.nextadmin,
    searchParams,
    options: { basePath: '/admin' },
    prisma,
    schema,
    action: submitFormAction,
    searchPaginatedResourceAction: searchResource,
    deleteAction: deleteItem,
  })

  return <NextAdmin {...props} />
}
