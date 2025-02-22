import type { ComponentProps } from 'react'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function NavMobile({
  children,
  ...props
}: ComponentProps<typeof Sheet>) {
  return (
    <div className="md:hidden">
      <Sheet {...props}>
        <SheetTrigger asChild>
          <Button size="icon" asChild variant="ghost">
            <MenuIcon className="w-8 h-8" />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-fit">{children}</SheetContent>
      </Sheet>
    </div>
  )
}
