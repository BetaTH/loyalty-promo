'use client'
import Link from 'next/link'
import { SALogo } from '../../svg-components/sa-logo'
import { Button } from '../../ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { NavMobile } from './nav-mobile'

const navLinks = [
  {
    name: 'Como Participar',
    href: '/#como-participar',
  },
  {
    name: 'Vip',
    href: '/#vip',
  },
  {
    name: 'Sobre',
    href: '/#sobre',
  },
  {
    name: 'FAQs',
    href: '/#faqs',
  },
]

export async function Header() {
  const router = useRouter()
  const pathname = usePathname()
  async function handleLogout() {
    await fetch('/api/logout', { method: 'GET' })
    router.replace('/')
  }

  return (
    <header className="px-6 sticky top-0 left-0 right-0 z-10 bg-background border-b border-white/20">
      <div className="mx-auto w-[65rem] sm:h-[5rem] py-3 sm:py-2 max-w-full flex justify-between items-center gap-2">
        <Link href={'/'} className="flex items-center gap-2">
          <SALogo className="text-primary sm:size-12 size-10" />
          <span className="text-white sm:text-3xl text-lg text-center sm:flex-row font-bank-gothic">
            Suplementos
          </span>
        </Link>
        {pathname !== '/meus-pontos' && (
          <>
            <nav className="hidden md:block">
              <ul className="flex">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Button
                      className="sm:text-lg hover:text-primary font-bank-gothic"
                      variant={'ghost'}
                      asChild
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <NavMobile>
              <nav>
                <ul className="flex flex-col items-center justify-center pt-10 gap-4">
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <Button
                        className="text-lg hover:text-primary font-bank-gothic"
                        variant={'ghost'}
                        asChild
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </NavMobile>
          </>
        )}

        {pathname === '/meus-pontos' && (
          <Button
            className="sm:text-lg hover:text-primary font-bank-gothic"
            variant={'ghost'}
            onClick={handleLogout}
          >
            Sair
          </Button>
        )}
      </div>
    </header>
  )
}
