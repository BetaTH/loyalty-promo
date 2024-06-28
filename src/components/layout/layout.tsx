import { PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { cn } from '@/lib/utils/cn'

interface LayoutProps extends PropsWithChildren {
  className?: string
  withHeader?: boolean
}

export function Layout({
  withHeader = true,
  className,
  children,
}: LayoutProps) {
  return (
    <main className={cn('', className)}>
      {withHeader && <Header />}
      {children}
      <Footer />
    </main>
  )
}
