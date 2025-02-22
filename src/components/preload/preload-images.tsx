'use client'

import { preload } from 'react-dom'

type PreloadImages = {
  url: string
}[]

interface PreloadImagesProps {
  images?: PreloadImages
}

export function PreloadImages({ images }: PreloadImagesProps) {
  preload('/bg/bg-hero.png', { as: 'image' })
  return null
}
