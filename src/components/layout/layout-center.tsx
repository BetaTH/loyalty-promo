import { cn } from '@/lib/utils/cn'
import { PropsWithChildren } from 'react'

interface LayoutCenterProps extends PropsWithChildren {
  className?: string
}
export function LayoutCenter({ className, children }: LayoutCenterProps) {
  return (
    <div
      className={cn(
        'min-h-dvh flex flex-col items-center justify-center px-4',
        className,
      )}
    >
      {children}
    </div>
  )
}
