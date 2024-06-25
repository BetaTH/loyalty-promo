import { Button } from '@/components/ui/button'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowBigDown } from 'lucide-react'
import { PropsWithChildren } from 'react'

export default function Landing() {
  return (
    <main>
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
            tittle="Cartão Smoothie"
            descriptions={[
              'Compre 10 unidades do nosso suplemento especial e ganhe a 11ª unidade grátis!',
              'Cada compra de nosso smoothie proteico acumula um ponto. Ao completar 10 pontos em um prazo de 30 dias, você ganha um smoothie grátis, que poderá ser resgatado dentro desse prazo!',
            ]}
          />
          <AboutItem
            cardImgSrc="/card-suplemento.png"
            tittle="Cartão Suplemento"
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

      <div className="h-[10rem]"></div>
    </main>
  )
}

function HighlightsTitle({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <ArrowBigDown className="text-primary fill-primary h-10 w-8" />
        <h2 className="text-2xl sm:text-3xl text-center font-medium w-fit">
          {children}
        </h2>
        <ArrowBigDown className="text-primary fill-primary h-10 w-8" />
      </div>
    </>
  )
}

function HighlightsSubTitle({ children }: PropsWithChildren) {
  return (
    <>
      <h3 className="text-3xl sm:text-[2.5rem] text-center font-medium">
        {children}
      </h3>
    </>
  )
}

type AboutItemProps = {
  cardImgSrc: string
  tittle: string
  descriptions: string[]
}

function AboutItem({ cardImgSrc, tittle, descriptions }: AboutItemProps) {
  return (
    <div className="sm:w-fit flex flex-col gap-4 sm:mx-5 my-4 px-5 sm:px-0">
      <Image
        src={cardImgSrc}
        alt={tittle}
        width={690}
        height={409}
        sizes="100%"
        priority={true}
        className="w-full sm:w-[24rem]"
      />
      <p className="uppercase text-primary font-medium text-center text-xl sm:text-2xl">
        {tittle}
      </p>
      <ul className="list-none">
        {descriptions.map((value, idx) => {
          return (
            <li
              key={idx}
              className="max-w-full sm:max-w-[24rem] my-2 sm:my-3 text-base sm:text-xl text-center"
            >
              {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

type HowItWorksItemProps = {
  itemImgSrc: string
} & PropsWithChildren

function HowItWorksItem({ itemImgSrc, children }: HowItWorksItemProps) {
  return (
    <div className="w-40 sm:w-[11rem] gap-2 flex mx-4 text-base sm:text-xl flex-col items-center sm:gap-4">
      <div
        className="size-16 sm:size-20 bg-center bg-cover"
        style={{ backgroundImage: `url('${itemImgSrc}')` }}
      />
      <span className="text-center">{children}</span>
    </div>
  )
}
