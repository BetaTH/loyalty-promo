import { NextAdmin } from '@premieroctet/next-admin'
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter'
import schema from '../../../../prisma/json-schema/json-schema.json'
import {
  deleteItem,
  searchResource,
  submitFormAction,
} from '@/lib/actions/next-admin'
import '../../globals.css'
import { prisma } from '@/server/prisma'
import { getSession } from '@/lib/sessions'
import { translations } from '@/next-admin-translations'
import { options } from '@/next-admin-options'

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
    // getMessages: async () => translations as Record<string, string>,
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
        translations={translations}
      />
    </main>
  )
}
