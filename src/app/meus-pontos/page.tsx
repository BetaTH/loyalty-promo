import { Layout } from "@/components/layout/layout";
import { LayoutCenter } from "@/components/layout/layout-center";
import { getCustomerStats } from "@/lib/actions/get-customer-stats";
import { LoyaltyCard } from "@/components/meus-pontos-page/loyalty-card";

export const dynamic = "force-dynamic";

export default async function MeusPontos() {
  const result = await getCustomerStats()!;
  const { customer, smoothieCount } = result!;
  return (
    <Layout className="h-screen bg-[url('/bg/bg.png')] bg-[length:250%] sm:bg-[length:75%] bg-repeat">
      <LayoutCenter className="h-[78%] sm:h-[85%]">
        <LoyaltyCard customer={customer} smoothieCount={smoothieCount} />
      </LayoutCenter>
    </Layout>
  );
}
