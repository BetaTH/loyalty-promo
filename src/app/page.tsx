import { LayoutWithFooter } from '@/components/layout/layout-with-footer'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getCustomerStats } from '@/lib/actions/get-customer-stats'
import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const result = await getCustomerStats()!
  const { customer, shakeCount } = result!
  const count = Array.from({ length: 10 }, (_, i) => i + 1)
  return (
    <LayoutWithFooter withHeader>
      <Card className="max-w-full w-[21.25rem] sm:rounded-2xl rounded-xl sm:w-[40.5rem] sm:p-6 p-4 gap-6 sm:gap-12 flex flex-col shadow-md border border-gray-200/20 shadow-white/10">
        <Image
          src="./logo-sa.svg"
          alt="logo"
          width={179}
          height={108}
          priority
          className="absolute sm:w-[22.4375rem] w-[15rem] h-auto -top-5 -right-12"
        />
        <CardHeader className="p-0">
          <CardTitle className="w-[14.75rem] max-h-[2.8875rem] sm:max-h-[5.25rem] line-clamp-2 font-normal text-[1.375rem]/[1.05em] sm:w-[27.5rem] sm:text-[2.5rem]/[1.05em]">
            {customer.name}
          </CardTitle>
          <CardDescription className="text-sm/[1.05em] sm:text-2xl/[1.05em] mt-2 sm:mt-4">
            Cartão Fidelidade:
          </CardDescription>
          <CardDescription className="text-3xl/6 sm:text-5xl mt-1 sm:mt-2 font-supermoloc text-primary">
            SHAKE
          </CardDescription>
        </CardHeader>
        <CardContent className="grid w-fit grid-cols-5 gap-3 sm:gap-5 mx-auto p-0">
          {count.map((value, idx) => {
            return (
              <div
                key={idx}
                className={cn('size-10 sm:size-16 bg-white rounded-full', {
                  'bg-primary': value <= shakeCount,
                })}
              />
            )
          })}
        </CardContent>
      </Card>
    </LayoutWithFooter>
  )
}
