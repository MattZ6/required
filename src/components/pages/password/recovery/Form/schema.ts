import { z } from 'zod'

export const passwordRecoverySchema = z.object({
  email: z
    .string()
    .min(1, { message: 'password-recovery-page.errors.email.required' })
    .email({ message: 'password-recovery-page.errors.email.invalid' }),
})

export type PasswordRecoveryFormType = z.infer<typeof passwordRecoverySchema>
