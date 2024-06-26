import { IconLinkedIn } from '../svg-components/icon-linkedin'
import { IconGitHub } from '../svg-components/icon-github'
import { SocialButton } from '../social-button'

export function Footer() {
  return (
    <footer className="px-6 ">
      <div className="mx-auto w-[65rem] py-2 sm:p-3 max-w-full flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
        <span className="text-foreground-100 text-sm text-center sm:flex-row">
          © 2024 | Desenvolvido por Thielson Almendra
        </span>
        <div className="flex gap-2">
          <SocialButton
            icon={IconGitHub}
            className="sm:size-7 size-8"
            href="https://github.com/BetaTH"
          />
          <SocialButton
            icon={IconLinkedIn}
            className="sm:size-6 size-7"
            href="https://www.linkedin.com/in/thielson-almendra/"
          />
        </div>
      </div>
    </footer>
  )
}
