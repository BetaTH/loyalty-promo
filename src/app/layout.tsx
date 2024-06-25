import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/them-provider'
import { cn } from '@/lib/utils/cn'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

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
          "bg-background bg-[url('/bg/bg.png')] bg-repeat",
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
