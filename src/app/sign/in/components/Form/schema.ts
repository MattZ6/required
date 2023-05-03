import { z } from 'zod'

import { PASSWORD_MIN_LENGTH } from '@utils/constants'

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'The e-mail address is required' })
    .email({ message: 'Must be a valid e-mail address' }),
  password: z
    .string()
    .nonempty({ message: 'The password is required' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters`,
    }),
})

export type SignInFormType = z.infer<typeof signInSchema>
