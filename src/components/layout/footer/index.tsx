import { IconLinkedIn } from '../../svg-components/icon-linkedin'
import { IconGitHub } from '../../svg-components/icon-github'
import { SocialButton } from '../../social-button'
import Image from 'next/image'
import { FooterList } from './footer-list'
import { contactItems } from '@/lib/const/footer-contact'
import { legalItens } from '@/lib/const/footer-legal'

export function Footer() {
  return (
    <footer className="p-6 sm:p-8 bg-background border-t border-primary">
      <div className="mx-auto w-[65rem] max-w-full flex items-center flex-col gap-5">
        <div className="flex w-full justify-between items-start gap-5 sm:gap-5 flex-col sm:flex-row">
          <Image
            src="/logo.png"
            alt="Logo"
            width={1920}
            height={1080}
            className="w-44 sm:w-60 sm:min-w-60 sm:block"
          />
          <div className="flex gap-10 w-full sm:w-fit justify-between sm:justify-normal">
            <FooterList title="Contato e Redes" listItems={contactItems} />
            <FooterList title="Legal" listItems={legalItens} />
          </div>
        </div>
        <div className="border-t border-primary w-full" />
        <div className="flex flex-row gap-2 sm:gap-2 items-center">
          <span className="text-foreground-100 text-sm text-center sm:flex-row">
            © 2024 | Desenvolvido por Thielson Almendra
          </span>
          <div className="flex gap-2">
            <SocialButton
              icon={IconGitHub}
              className="sm:size-7 size-6"
              href="https://github.com/BetaTH"
            />
            <SocialButton
              icon={IconLinkedIn}
              className="sm:size-6 size-6"
              href="https://www.linkedin.com/in/thielson-almendra/"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
