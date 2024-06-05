import { NextAdmin } from '@premieroctet/next-admin'
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter'
import schema from '../../../../prisma/json-schema/json-schema.json'
import {
  deleteItem,
  searchResource,
  submitFormAction,
} from '@/lib/actions/nextadmin'
import '../../globals.css'
import { prisma } from '@/server/prisma'
import { options } from '@/lib/utils/options'
import { getSession } from '@/lib/sessions'

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] }
  searchParams: { [key: string]: string | string[] | undefined } | undefined
}) {
  const session = await getSession()
  const props = await getPropsFromParams({
    params: params.nextadmin,
    searchParams,
    options,
    prisma,
    schema,
    action: submitFormAction,
    searchPaginatedResourceAction: searchResource,
    deleteAction: deleteItem,
  })

  return (
    <main className="bg-nextadmin-background-default w-full min-h-screen">
      <NextAdmin
        {...props}
        user={{
          data: {
            name: session.name ?? '',
            picture: '/logo-sa.png',
          },
          logoutUrl: '/api/logout',
        }}
      />
    </main>
  )
}
