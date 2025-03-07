import { config } from 'dotenv'
import { z } from 'zod'

config()

// if (process.env.NODE_ENV === 'test') {
//   config({ path: '.env.test', override: true })
// }

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())
  throw new Error('Invalid environment variables!')
}

export const env = _env.data
