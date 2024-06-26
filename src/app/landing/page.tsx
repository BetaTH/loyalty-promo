import { Button } from '@/components/ui/button'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/layout/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HowItWorksItem } from '@/components/landing-page/how-it-works-item'
import { AboutItem } from '@/components/landing-page/about-item'
import { HighlightsTitle } from '@/components/landing-page/highlights-title'
import { HighlightsSubTitle } from '@/components/landing-page/highlights-subtitle'

export default function Landing() {
  const faq = [
    {
      title: 'Is it accessible?',
      description: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      title: 'Is it styled?',
      description:
        "Yes. It comes with default styles that matches the other component's aesthetic.",
    },
    {
      title: 'Is it animated?',
      description:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ]

  return (
    <main className="bg-[url('/bg/bg.png')] bg-repeat">
      {/* HOW IT WORKS */}
      <section className="py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
        <HighlightsTitle>COMO FUNCIONA</HighlightsTitle>
        <HighlightsSubTitle>
          SAIBA COMO <span className="text-primary">PARTICIPAR</span>
        </HighlightsSubTitle>
        <div className="flex flex-col gap-5 sm:flex-row mt-10 sm:mt-20 sm:mb-5 sm:w-[50rem] sm:max-w-full sm:justify-between">
          <HowItWorksItem itemImgSrc="/register.png">
            Realize o cadastro na nossa loja, faça compras e acumule pontos
          </HowItWorksItem>
          <HowItWorksItem itemImgSrc="/points.png">
            Acesse o seu cartão fidelidade e verifique seu saldo de pontos.
          </HowItWorksItem>
          <HowItWorksItem itemImgSrc="/gift.png">
            Troque seus pontos por produtos grátis e prêmios exclusivos.
          </HowItWorksItem>
        </div>
      </section>
      {/* //------// */}

      {/* MESSAGE - WHATSAPP */}
      <section className="flex flex-col items-center justify-center bg-secondary w-full h-80 gap-3 ">
        <h2 className="text-3xl w-[80%] sm:text-[2.5rem] text-white text-center font-semibold">
          PARTICIPE DO NOSSO GRUPO VIP
        </h2>
        <Button
          asChild
          className="rounded-full text-xl gap-2 sm:text-3xl px-8 py-6 sm:px-10 sm:py-8 flex items-center justify-center "
        >
          <Link href="https://www.instagram.com/sasuplementhe/" target="_blank">
            ACESSE O GRUPO
            <SiWhatsapp className="size-6 sm:size-[1.875rem]" />
          </Link>
        </Button>
      </section>
      {/* //------// */}

      {/* ABOUT */}
      <section className="py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
        <HighlightsTitle>SOBRE O PROGRAMA</HighlightsTitle>
        <HighlightsSubTitle>
          DESCUBRA O QUE VOCÊ <span className="text-primary">GANHA!</span>
        </HighlightsSubTitle>
        <div className="flex flex-col sm:flex-row my-5 sm:w-[60rem] sm:max-w-full sm:justify-between">
          <AboutItem
            cardImgSrc="/card-smoothie.png"
            title="Cartão Smoothie"
            descriptions={[
              'Compre 10 unidades do nosso suplemento especial e ganhe a 11ª unidade grátis!',
              'Cada compra de nosso smoothie proteico acumula um ponto. Ao completar 10 pontos em um prazo de 30 dias, você ganha um smoothie grátis, que poderá ser resgatado dentro desse prazo!',
            ]}
          />
          <AboutItem
            cardImgSrc="/card-suplemento.png"
            title="Cartão Suplemento"
            descriptions={[
              'Em breve, lançaremos um cartão com novos prêmios incríveis!',
              'Fique atento para mais informações e descubra como você poderá acumular pontos e trocar por diversos prêmios exclusivos.',
            ]}
          />
        </div>
      </section>
      {/* //------// */}

      {/* MESSAGE */}
      {/* <section className="flex px-3 flex-col items-center justify-center bg-secondary w-full h-80 gap-3">
        <h2 className="text-4xl sm:text-[2.5rem] text-white text-center sm:w-[40rem] font-semibold">
          <span className="text-primary text-3xl sm:text-4xl">
            FIQUE LIGADO NA MELHOR
          </span>
          <br />
          LOJA DE SUPLEMENTAÇÃO DE TERESINA
        </h2>
      </section> */}
      {/* //------// */}

      {/* LOCATION */}
      <section className="bg-gray-900 border-t border-primary py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
        <HighlightsTitle>SAIBA ONDE NOS ENCONTRAR</HighlightsTitle>
        <HighlightsSubTitle>
          JÁ CONHECE O NOSSO <span className="text-primary">ENDEREÇO?</span>
        </HighlightsSubTitle>
        <Image
          src="/location-map.png"
          alt="Localização"
          width={1590}
          height={771}
          sizes="100%"
          priority={true}
          className="w-[60rem]"
        />
        <p className="text-center sm:text-lg sm:w-[25rem]">
          Estamos localizados na Av. Centenário 1165, ao lado da Academia
          Simplifit, Bairro Aeroporto.
        </p>
      </section>
      {/* //------// */}

      {/* MESSAGE -INSTAGRAM */}
      <section className="flex flex-col items-center justify-center bg-secondary w-full h-80 gap-3">
        <h2 className="text-3xl w-[80%] sm:text-[2.5rem] text-white text-center font-semibold">
          NÃO PERCA AS NOVIDADES
        </h2>
        <Button
          asChild
          className="rounded-full text-xl gap-2 sm:text-3xl px-8 py-6 sm:px-10 sm:py-8 flex items-center justify-center "
        >
          <Link href="https://www.instagram.com/sasuplementhe/" target="_blank">
            SIGA NOSSO INSTAGRAM
            <SiInstagram className="size-6 sm:size-[1.875rem]" />
          </Link>
        </Button>
      </section>
      {/* //------// */}

      {/* FAQS */}
      <section className="bg-background sm:px-10 px-5">
        <div className="w-[65rem] max-w-full mx-auto sm:py-20 py-10 flex flex-col gap-5 sm:gap-10">
          <h2 className="sm:text-4xl text-2xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, idx) => (
              <AccordionItem value={`item-${idx + 1}`} key={idx}>
                <AccordionTrigger className="text-lg sm:text-2xl">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-lg">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* //------// */}

      <Footer />
    </main>
  )
}
