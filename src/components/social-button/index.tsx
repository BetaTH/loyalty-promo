import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { ElementType } from 'react'

interface SocialButtonProps {
  icon: ElementType
  href: string
  className?: string
  containerClassName?: string
}

export function SocialButton({
  href,
  icon: Icon,
  className,
}: SocialButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center size-8 sm:size-7"
    >
      <Icon
        className={cn(
          'size-8 text-foreground hover:text-primary transition-colors ',
          className,
        )}
      />
    </Link>
  )
}
