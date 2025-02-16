'use client'

import Image from 'next/image'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

import { cn } from '@/lib/utils/cn'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface LoyaltyCardProps {
  customer: {
    name: string
    email: string
    phoneNumber: string
  }
  card: {
    type: string
    points: number
  }
}

export function LoyaltyCard({ customer, card }: LoyaltyCardProps) {
  const panOffSetX = useMotionValue(0)
  const panOffSetY = useMotionValue(0)
  const rotateXDeg = useMotionValue('0deg')
  const rotateYDeg = useMotionValue('0deg')

  const input = [-500, -100, 0, 100, 500]
  const outputX = [10, 8, 0, -8, -10]
  const outputY = [-13, -8, 0, 8, 13]

  useTransform(panOffSetX, input, outputX).on('change', (latest) => {
    rotateXDeg.set(`${latest}deg`)
  })
  useTransform(panOffSetY, input, outputY).on('change', (latest) => {
    rotateYDeg.set(`${latest}deg`)
  })

  const count = Array.from({ length: 10 }, (_, i) => i + 1)
  return (
    <div className="[perspective:800px] sm:[perspective:2000px] w-fit my-10 mx-auto">
      <motion.div
        style={{
          rotateX: rotateXDeg,
          rotateY: rotateYDeg,
        }}
        onPan={(_, pointInfo) => {
          panOffSetX.set(pointInfo.offset.y)
          panOffSetY.set(pointInfo.offset.x)
        }}
        onPanEnd={() => {
          animate(panOffSetX, 0, { duration: 0.3 })
          animate(panOffSetY, 0, { duration: 0.3 })
        }}
        className={cn(
          'touch-none *:pointer-events-none [backface-visibility:hidden] *:select-none relative [transform-style:preserve-3d]',
          'before:absolute before:inset-[0.25rem] before:z-[-1] before:bg-white/10 before:blur-[10px] before:[transform:translateZ(-50px)]',
        )}
      >
        <Card
          className={cn(
            '[transform-style:preserve-3d] max-w-full w-[21.25rem] overflow-visible z-0 sm:rounded-2xl rounded-xl sm:w-[35rem] md:w-[38rem] sm:p-6 p-4 gap-6 sm:gap-12 flex flex-col border border-gray-200/20',
            {
              'bg-card': card.type === 'smoothie',
              'bg-secondary': card.type === 'suplemento',
            },
          )}
        >
          <div className="absolute w-full h-full overflow-hidden top-0 left-0 rounded-[inherit]">
            <Image
              src="./logo-sa.svg"
              alt="logo"
              width={179}
              height={108}
              priority
              className="absolute sm:w-[22.4375rem] w-[15rem] h-auto -top-5 -right-12"
            />
          </div>

          <CardHeader className="p-0 [transform:translateZ(5px)]">
            <CardTitle className="w-[14.75rem] max-h-[2.8875rem] font-bank-gothic sm:max-h-[5.25rem] line-clamp-2 font-normal text-[1.375rem]/[1.05em] sm:w-[27.5rem] sm:text-[2.5rem]/[1.05em]">
              {customer.name}
            </CardTitle>
            <CardDescription className="text-sm/[1.05em] sm:text-2xl/[1.05em] mt-2 sm:mt-4 font-bank-gothic">
              Cartão Fidelidade:
            </CardDescription>
            <CardDescription className="text-3xl/6 sm:text-[2.75rem]/[1] mt-1 sm:mt-2 font-supermoloc text-primary uppercase">
              {card.type}
            </CardDescription>
          </CardHeader>
          <CardContent className="[transform:translateZ(5px)] trans grid w-fit grid-cols-5 gap-3 sm:gap-5 mx-auto p-0">
            {count.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className={cn('size-10 sm:size-14 bg-white rounded-full ', {
                    'bg-primary': value <= card.points,
                  })}
                />
              )
            })}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
