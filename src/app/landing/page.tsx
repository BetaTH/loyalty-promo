'use client'
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
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { ArrowBigDown } from 'lucide-react'
import { Header } from '@/components/layout/header'

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
  const HERO_IMG_SCALE = 0.24

  return (
    <main className="bg-[url('/bg/bg.png')] bg-[length:250%] sm:bg-[length:75%] bg-repeat">
      <Header />
      {/* HERO */}
      <section className="sm:min-h-screen py-28 sm:pt-[6.5rem] px-5 sm:px-10 bg-[url('/bg/bg-hero.png')] bg-[length:auto_50%] sm:bg-cover sm:bg-no-repeat border-b border-primary">
        <div className="w-[60rem] max-w-full flex flex-col items-center sm:flex-row mx-auto gap-24 justify-center">
          <div className="flex flex-col w-fit sm:pt-0 sm:w-[23.24rem]">
            <div
              className="relative"
              style={{
                width: `calc(84.7125rem * ${HERO_IMG_SCALE})`,
                height: `calc(86.75rem * ${HERO_IMG_SCALE})`,
              }}
            >
              <Image
                src="/hero-smoothie.png"
                alt="Image 02 do Hero - Smoothie"
                width={840}
                height={991}
                sizes="100%"
                priority={true}
                className="pointer-events-none absolute"
                style={{
                  width: `calc(52.5rem * ${HERO_IMG_SCALE})`,
                  height: `calc(61.9375rem * ${HERO_IMG_SCALE})`,
                  top: `calc(5.75rem * ${HERO_IMG_SCALE})`,
                }}
              />
              <Image
                src="/hero-shirt.png"
                alt="Image 02 do Hero - Camisa"
                width={784}
                height={991}
                sizes="100%"
                priority={true}
                className="pointer-events-none absolute right-0"
                style={{
                  width: `calc(49rem * ${HERO_IMG_SCALE})`,
                  height: `calc(61.9375rem * ${HERO_IMG_SCALE})`,
                }}
              />
              <Image
                src="/hero-card-01.png"
                alt="Image 01 do Hero - Cartão"
                width={919}
                height={609}
                sizes="100%"
                priority={true}
                className="pointer-events-none absolute bottom-0"
                style={{
                  width: `calc(57.4375rem * ${HERO_IMG_SCALE})`,
                  height: `calc(38.0625rem * ${HERO_IMG_SCALE})`,
                  left: `calc(5.625rem * ${HERO_IMG_SCALE})`,
                }}
              />
              <Image
                src="/hero-card-02.png"
                alt="Image 02 do Hero - Cartão"
                width={703}
                height={543}
                sizes="100%"
                priority={true}
                className="pointer-events-none absolute"
                style={{
                  width: `calc(43.9375rem * ${HERO_IMG_SCALE})`,
                  height: `calc(33.9375rem * ${HERO_IMG_SCALE})`,
                  right: `calc(2.5rem * ${HERO_IMG_SCALE})`,
                  bottom: `calc(16.125rem * ${HERO_IMG_SCALE})`,
                }}
              />
            </div>
            <h1 className="text-2xl mt-10">
              FAÇA PARTE DO NOSSO{' '}
              <span className="text-primary">PROGRAMA DE FIDELIDADE</span>
            </h1>
            <h2 className="text-xl mt-2">
              Acumule pontos e troque por produtos grátis e prêmios exclusivos!
            </h2>
            <Button
              variant={'secondary'}
              className="w-full sm:text-xl text-primary mt-10"
              // disabled={isPending}
            >
              <ArrowBigDown className="size-6 mx-2" />
              SAIBA MAIS
              <ArrowBigDown className="size-6 mx-2" />
            </Button>
          </div>

          <div className="flex flex-col w-full sm:sm:w-[23.24rem] p-5 py-8 bg-black sm:p-8 rounded-xl sm:rounded-lg shadow-md shadow-white/10">
            <div className="space-y-5">
              <p className="sm:text-2xl text-xl font-normal">
                Já Possui Cadastro?
              </p>
              <form className="space-y-5">
                <div className="space-y-1">
                  <Label className="sm:text-xl ">Email</Label>
                  <Input name="email" className="sm:text-2xl" required />
                </div>
                <div className="space-y-1">
                  <Label className="sm:text-xl ">CPF</Label>
                  <Input name="cpf" className="sm:text-2xl" required />
                </div>
                <Button
                  className="w-full sm:text-xl text-black"
                  // disabled={isPending}
                >
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* //------// */}

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
      <section className="flex flex-col items-center justify-center bg-secondary w-full min-h-80 gap-5 py-10">
        <h2 className="text-3xl w-[80%] sm:w-full sm:text-[2.5rem] text-white text-center font-semibold">
          PARTICIPE TAMBÉM DO NOSSO <br className="hidden sm:block" />{' '}
          <span className="text-primary">GRUPO VIP</span>
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
        <div className="flex flex-col gap-2 text-center">
          <p className="font-medium text-xl sm:text-2xl text-primary">
            Quais o Beneficios do Grupo VIP?
          </p>
          <ul className="text-base sm:text-xl gap-2">
            <li>Descontos Exclusivos</li>
            <li>Ofertas Personalizadas</li>
            <li>Acesso Antecipado a Promoções</li>
          </ul>
        </div>
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
      <section className="bg-background border-t border-primary py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
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
      <section className="flex flex-col items-center justify-center bg-secondary w-full min-h-80 gap-5 py-10">
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
