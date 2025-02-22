import { Layout } from '@/components/layout/layout'
import { LayoutCenter } from '@/components/layout/layout-center'
import { getCustomerStats } from '@/lib/actions/get-customer-stats'
import { CardsCarousel } from '@/components/meus-pontos-page/cards-carousel'

export const dynamic = 'force-dynamic'

export default async function MeusPontos() {
  const result = await getCustomerStats()!
  const customerStats = result!
  return (
    <Layout
      withFooter={false}
      className="bg-[url('/bg/bg.png')] bg-[length:250%] sm:bg-[length:75%] bg-repeat"
    >
      <LayoutCenter className="h-full">
        <CardsCarousel customerStats={customerStats} />
      </LayoutCenter>
    </Layout>
  )
}
