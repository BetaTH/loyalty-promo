import { config } from 'dotenv'
import { ZodError, z } from 'zod'

config()

const envSchema = z.object({})

export let env: z.infer<typeof envSchema>

try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof ZodError) {
    console.error(
      'Environment variables was not defined:',
      error.formErrors.fieldErrors,
    )
  }
}
