import { z } from 'zod'

import { NAME_MIN_LENGTH } from '@utils/constants'

export const changeNameSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: 'The name is required' })
    .min(NAME_MIN_LENGTH, {
      message: `At least ${NAME_MIN_LENGTH} characters`,
    }),
})

export type ChangeNameFormType = z.infer<typeof changeNameSchema>
