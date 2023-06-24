import { z } from 'zod'

import { PASSWORD_MIN_LENGTH } from '@utils/constants'

export const changePasswordSchema = z.object({
  old_password: z
    .string()
    .nonempty({ message: 'The old password is required' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters`,
    }),
  new_password: z
    .string()
    .nonempty({ message: 'The new password is required' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters`,
    }),
  new_password_confirmation: z
    .string()
    .nonempty({ message: 'The new password confirmation is required' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters`,
    }),
})

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>
