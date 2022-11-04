import { z } from 'zod'

import { PASSWORD_MIN_LENGTH } from '@utils/constants'

export const welcomeBackSchema = z.object({
  password: z
    .string()
    .min(1, { message: 'welcome-back.errors.password.required' })
    .min(PASSWORD_MIN_LENGTH, { message: 'welcome-back.errors.password.min' }),
})

export type WelcomeBackFormType = z.infer<typeof welcomeBackSchema>
