import { z } from 'zod'

import { PASSWORD_MIN_LENGTH } from '@utils/constants'

// TODO: add min lentgh messages

export const passwordResetSchema = z
  .object({
    new_password: z
      .string()
      .min(1, { message: 'password-reset-page.errors.new_password.required' })
      .min(PASSWORD_MIN_LENGTH, {
        message: 'password-reset-page.errors.new_password.min',
      }),
    new_password_confirmation: z
      .string()
      .min(1, {
        message:
          'password-reset-page.errors.new_password_confirmation.required',
      })
      .min(PASSWORD_MIN_LENGTH, {
        message: 'password-reset-page.errors.new_password_confirmation.min',
      }),
  })
  .refine(
    ({ new_password, new_password_confirmation }) =>
      new_password_confirmation === new_password,
    {
      message: 'password-reset-page.errors.new_password_confirmation.match',
      path: ['new_password_confirmation'],
    },
  )

export type PasswordResetFormType = z.infer<typeof passwordResetSchema>
