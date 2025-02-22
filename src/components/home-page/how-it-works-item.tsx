import { PropsWithChildren } from 'react'

type HowItWorksItemProps = {
  itemImgSrc: string
} & PropsWithChildren

export function HowItWorksItem({ itemImgSrc, children }: HowItWorksItemProps) {
  return (
    <div className="w-40 sm:w-[11rem] gap-2 flex mx-4 text-base sm:text-xl flex-col items-center sm:gap-4">
      <div
        className="size-16 sm:size-20 bg-center bg-cover"
        style={{ backgroundImage: `url('${itemImgSrc}')` }}
      />
      <span className="text-center">{children}</span>
    </div>
  )
}
