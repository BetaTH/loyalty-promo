import defaultColors from 'tailwindcss/colors'

const nextadmin = {
  primary: defaultColors.indigo,
  brand: {
    subtle: defaultColors.indigo[400],
    default: defaultColors.indigo[500],
    emphasis: defaultColors.indigo[700],
    inverted: defaultColors.white,
    muted: defaultColors.slate[50],
  },
  menu: {
    background: defaultColors.slate[800],
    color: defaultColors.slate[300],
    muted: defaultColors.slate[600],
    emphasis: defaultColors.slate[200],
  },
  border: {
    default: defaultColors.slate[600],
    strong: defaultColors.slate[700],
  },
  background: {
    default: defaultColors.slate[900],
    emphasis: defaultColors.slate[800],
    subtle: defaultColors.slate[600],
    muted: defaultColors.slate[500],
  },
  content: {
    default: defaultColors.gray[300],
    subtle: defaultColors.neutral[200],
    emphasis: defaultColors.slate[400],
    inverted: defaultColors.slate[50],
  },
  alert: {
    info: {
      background: defaultColors.slate[600],
      content: defaultColors.sky[200],
    },
    success: {
      background: defaultColors.slate[600],
      content: defaultColors.green[400],
    },
    error: {
      background: defaultColors.slate[600],
      content: defaultColors.red[400],
    },
  },
}

export const colors = {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  nextadmin,
  'dark-nextadmin': nextadmin,
}
