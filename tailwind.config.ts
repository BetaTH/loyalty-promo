import { theme } from './src/lib/theme'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'bank-gothic': ['var(--font-bank-gothic)'],
        supermoloc: ['var(--font-supermolot)'],
        inter: ['var(--font-inter)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      ...theme,
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
