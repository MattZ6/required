import { z } from 'zod';

import { NAME_MIN_LENGTH } from '@utils/constants';

export const updateNameSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'update-profile-name.errors.name.required' })
    .min(NAME_MIN_LENGTH, {
      message: 'update-profile-name.errors.name.minlength',
    }),
});

export type UpdateNameFormType = z.infer<typeof updateNameSchema>;
