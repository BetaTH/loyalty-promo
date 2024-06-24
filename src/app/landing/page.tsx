import { Button } from '@/components/ui/button'
import { SiInstagram } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowBigDown } from 'lucide-react'
import { PropsWithChildren } from 'react'

export default function Landing() {
  return (
    <main>
      <section className="py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
        <HighlightsTitle>SAIBA SUAS VANTAGENS</HighlightsTitle>
        <HighlightsSubTitle>
          O QUE VOCÊ VAI <span className="text-primary">GANHAR</span>
        </HighlightsSubTitle>
      </section>
      <section className="flex px-3 flex-col items-center justify-center bg-secondary w-full h-80 bg-[url('/bg/baloes.png')] gap-3 bg-[length:200%_auto] sm:bg-[length:100%_auto] bg-[position:80%_center] sm:bg-center bg-no-repeat bg-fixed">
        <h2 className="text-4xl sm:text-[2.5rem] text-white text-center sm:w-[40rem] font-semibold">
          <span className="text-primary text-3xl sm:text-4xl">
            FIQUE LIGADO NA MELHOR
          </span>
          <br />
          LOJA DE SUPLEMENTAÇÃO DE TERESINA
        </h2>
      </section>
      <section className="py-10 flex flex-col items-center justify-center gap-3 sm:py-8 sm:px-10 px-5">
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
      <section className="flex flex-col items-center justify-center bg-secondary w-full h-80 bg-[url('/bg/baloes.png')] gap-3 bg-[length:200%_auto] sm:bg-[length:100%_auto] bg-[position:80%_bottom] sm:bg-center bg-no-repeat bg-fixed">
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
