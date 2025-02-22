'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

import { ArrowBigDown } from 'lucide-react'
export function HomeHero() {
  const HERO_IMG_SCALE = 0.24
  function scrollToBiome() {
    document
      ?.getElementById('como-participar')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
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
        onClick={scrollToBiome}
        className="w-full sm:text-xl text-primary mt-10"
        // disabled={isPending}
      >
        <ArrowBigDown className="size-6 mx-2" />
        SAIBA MAIS
        <ArrowBigDown className="size-6 mx-2" />
      </Button>
    </div>
  )
}
