import { PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'

interface LayoutWithFooterProps extends PropsWithChildren {
  withHeader?: boolean
}

export function LayoutWithFooter({
  withHeader = false,
  children,
}: LayoutWithFooterProps) {
  return (
    <main className="min-h-dvh flex flex-col relative">
      {withHeader && <Header />}
      <section className="flex-1 flex flex-col items-center justify-center px-4 ">
        {children}
      </section>
      <Footer />
    </main>
  )
}
