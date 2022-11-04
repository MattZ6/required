import { z } from 'zod';

import { PASSWORD_MIN_LENGTH } from '@utils/constants';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'sign-in.errors.email.required' })
    .email({ message: 'sign-in.errors.email.invalid' }),
  password: z
    .string()
    .min(1, { message: 'sign-in.errors.password.required' })
    .min(PASSWORD_MIN_LENGTH, { message: 'sign-in.errors.password.minlength' }),
});

export type SignInFormType = z.infer<typeof signInSchema>;
