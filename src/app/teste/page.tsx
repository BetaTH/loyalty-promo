import { Layout } from "@/components/layout/layout";
import { LayoutCenter } from "@/components/layout/layout-center";
import { LoyaltyCard } from "@/components/meus-pontos-page/loyalty-card";

export default async function MeusPontos() {
  const customer = {
    name: "Thielson",
    email: "thielson12@gmail.com",
    phoneNumber: "86994253738",
  };
  const smoothieCount = 4;
  return (
    <Layout>
      <LayoutCenter>
        <LoyaltyCard customer={customer} smoothieCount={smoothieCount} />
        <LoyaltyCard customer={customer} smoothieCount={smoothieCount} />
      </LayoutCenter>
    </Layout>
  );
}
