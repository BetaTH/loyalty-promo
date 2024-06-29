import { Button } from '@/components/ui/button'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HowItWorksItem } from '@/components/home-page/how-it-works-item'
import { AboutItem } from '@/components/home-page/about-item'
import { HighlightsTitle } from '@/components/home-page/highlights-title'
import { HighlightsSubTitle } from '@/components/home-page/highlights-subtitle'
import { Header } from '@/components/layout/header'
import { faq } from '@/lib/const/faq'
import { LoginForm } from '@/components/home-page/login-form'
import { HomeHero } from '@/components/home-page/home-hero'
import { Layout } from '@/components/layout/layout'

export default function Home() {
  return (
    <Layout className="bg-[url('/bg/bg.png')] bg-[length:250%] sm:bg-[length:75%] bg-repeat block">
      <Header />
      {/* HERO */}
      <section className="sm:min-h-screen py-28 sm:pt-[6.5rem] px-5 sm:px-10 bg-[url('/bg/bg-hero.png')] bg-[length:auto_50%] sm:bg-cover sm:bg-no-repeat border-b border-primary">
        <div className="w-[55rem] max-w-full flex flex-col items-center md:flex-row mx-auto gap-24 md:gap-12 md:justify-between">
          <HomeHero />
          <LoginForm />
        </div>
      </section>
      {/* //------// */}

      {/* HOW IT WORKS */}
      <section
        id="como-participar"
        className="-mt-14 sm:-mt-[5rem] sm:pt-[7rem] py-24 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5"
      >
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
      <section
        id="vip"
        className="flex flex-col items-center justify-center bg-secondary w-full min-h-80 gap-5 py-24"
      >
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
          <p className="font-semibold text-xl sm:text-2xl text-primary">
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
      <section
        id="sobre"
        className="-mt-14 sm:-mt-[5rem] sm:pt-[7rem] py-24 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5"
      >
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
      <section id="faqs" className="bg-background sm:px-10 px-5">
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
    </Layout>
  )
}
