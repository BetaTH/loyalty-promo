import { Button } from '@/components/ui/button'
import { SiInstagram } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export default function Landing() {
  return (
    <main>
      <div className="h-[40rem]"></div>
      <section className="flex px-3 flex-col items-center justify-center bg-secondary w-full h-80 bg-[url('/bg/baloes.png')] gap-3 bg-[length:200%_auto] sm:bg-[length:100%_auto] bg-[position:80%_center] sm:bg-center bg-no-repeat bg-fixed">
        <h2 className="text-4xl sm:text-[2.5rem] text-white text-center sm:w-[40rem] font-semibold">
          <span className="text-primary text-3xl sm:text-4xl">
            FIQUE LIGADO NA MELHOR
          </span>
          <br />
          LOJA DE SUPLEMENTAÇÃO DE TERESINA
        </h2>
      </section>
      <div className="h-[40rem]"></div>
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
