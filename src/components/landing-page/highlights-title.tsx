import { cn } from '@/lib/utils/cn'
import { ArrowBigDown } from 'lucide-react'
import { HtmlHTMLAttributes } from 'react'

interface HighlightsTitle extends HtmlHTMLAttributes<HTMLParagraphElement> {}

export function HighlightsTitle({ className, children }: HighlightsTitle) {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <ArrowBigDown className="text-primary fill-primary h-10 w-8" />
        <h2
          className={cn(
            'text-2xl sm:text-3xl text-center font-medium w-fit',
            className,
          )}
        >
          {children}
        </h2>
        <ArrowBigDown className="text-primary fill-primary h-10 w-8" />
      </div>
    </>
  )
}
