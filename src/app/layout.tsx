import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/them-provider'
import { cn } from '@/lib/utils/cn'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/toaster'

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Promoção Fidelidade',
  description: 'Promoção Fidelidade da SA Suplemento',
}

const supermolot = localFont({
  src: '../fonts/tt-supermolot-neue-extrabold.ttf',
  display: 'swap',
  variable: '--font-supermolot',
})
const bankGothic = localFont({
  src: '../fonts/bank-gothic-light-bt.ttf',
  display: 'swap',
  variable: '--font-bank-gothic',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background ',
          inter.className,
          bankGothic.variable,
          supermolot.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
