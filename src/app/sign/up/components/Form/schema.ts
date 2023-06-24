import { z } from 'zod'

import { PASSWORD_MIN_LENGTH, NAME_MIN_LENGTH } from '@utils/constants'

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: 'The name is required' })
    .min(NAME_MIN_LENGTH, {
      message: `At least ${NAME_MIN_LENGTH} characters`,
    }),
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
  password_confirmation: z
    .string()
    .nonempty({ message: 'The password confirmation is required' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters`,
    }),
})

export type SignUpFormType = z.infer<typeof signUpSchema>
