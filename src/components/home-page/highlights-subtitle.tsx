import { cn } from '@/lib/utils/cn'
import { HtmlHTMLAttributes } from 'react'

interface HighlightsSubTitle extends HtmlHTMLAttributes<HTMLParagraphElement> {}

export function HighlightsSubTitle({
  className,
  children,
}: HighlightsSubTitle) {
  return (
    <>
      <h3
        className={cn(
          'text-3xl sm:text-[2.5rem] text-center font-medium',
          className,
        )}
      >
        {children}
      </h3>
    </>
  )
}
