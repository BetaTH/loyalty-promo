'use client'
import Link from 'next/link'
import { SALogo } from '../svg-components/sa-logo'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()
  async function handleLogout() {
    await fetch('/api/logout', { method: 'GET' })
    router.replace('/login')
  }

  return (
    <header className="px-6 absolute top-0 left-0 right-0 z-10 border-b border-white/20">
      <div className="mx-auto w-[65rem] sm:h-[5rem] py-3 sm:py-2 max-w-full flex justify-between items-center gap-2">
        <Link href={'/'} className="flex items-center gap-2">
          <SALogo className="text-primary sm:size-12 size-10" />
          <span className="text-white sm:text-3xl text-lg text-center sm:flex-row">
            Suplemento
          </span>
        </Link>
        <Button
          className="sm:text-lg hover:text-primary "
          variant={'ghost'}
          onClick={handleLogout}
        >
          Sair
        </Button>
      </div>
    </header>
  )
}
