import { z } from 'zod';

import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from '@utils/constants';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'sign-up.errors.name.required' })
      .min(NAME_MIN_LENGTH, { message: 'sign-up.errors.name.minlength' }),
    email: z
      .string()
      .trim()
      .min(1, { message: 'sign-up.errors.email.required' })
      .email({ message: 'sign-up.errors.email.invalid' }),
    password: z
      .string()
      .min(1, { message: 'sign-up.errors.password.required' })
      .min(PASSWORD_MIN_LENGTH, {
        message: 'sign-up.errors.password.minlength',
      }),
    password_confirmation: z
      .string()
      .min(1, { message: 'sign-up.errors.password_confirmation.required' })
      .min(PASSWORD_MIN_LENGTH, {
        message: 'sign-up.errors.password_confirmation.minlength',
      }),
  })
  .refine(
    ({ password_confirmation, password }) => password_confirmation === password,
    {
      message: 'sign-up.errors.password_confirmation.divergent',
      path: ['password_confirmation'],
    }
  );

export type SignUpFormType = z.infer<typeof signUpSchema>;
