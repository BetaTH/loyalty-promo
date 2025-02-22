import { PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { cn } from '@/lib/utils/cn'

interface LayoutProps extends PropsWithChildren {
  className?: string
  withHeader?: boolean
  withFooter?: boolean
}

export function Layout({
  withFooter = true,
  withHeader = true,
  className,
  children,
}: LayoutProps) {
  return (
    <main className={cn('min-h-svh', className)}>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </main>
  )
}
