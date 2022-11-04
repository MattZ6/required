import { z } from 'zod';

import { PASSWORD_MIN_LENGTH } from '@utils/constants';

export const updatePasswordSchema = z.object({
  old_password: z
    .string()
    .min(1, { message: 'update-profile-password.errors.old_password.required' })
    .min(PASSWORD_MIN_LENGTH, { message: 'common.errors.min' }),
  new_password: z
    .string()
    .min(1, { message: 'update-profile-password.errors.new_password.required' })
    .min(PASSWORD_MIN_LENGTH, { message: 'common.errors.min' }),
  new_password_confirmation: z
    .string()
    .min(1, {
      message:
        'update-profile-password.errors.new_password_confirmation.required',
    })
    .min(PASSWORD_MIN_LENGTH, { message: 'common.errors.min' }),
});

export type UpdatePasswordFormType = z.infer<typeof updatePasswordSchema>;
