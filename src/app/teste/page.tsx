import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "@/components/layout/layout";
import { LayoutCenter } from "@/components/layout/layout-center";
import { CardsCarousel } from "@/components/meus-pontos-page/cards-carousel";

export default function MeusPontos() {
  const customer = {
    name: "Thielson",
    email: "thielson12@gmail.com",
    phoneNumber: "86994253738",
  };
  const cards = [
    {
      type: "smoothie",
      points: 4,
    },
    {
      type: "suplemento",
      points: 5,
    },
  ];

  return (
    <Layout
      withFooter={false}
      className="bg-[url('/bg/bg.png')] bg-[length:250%] sm:bg-[length:75%] bg-repeat"
    >
      <LayoutCenter className="h-full">
        <CardsCarousel customerStats={{ customer, cards }} />
      </LayoutCenter>
    </Layout>
  );
}
