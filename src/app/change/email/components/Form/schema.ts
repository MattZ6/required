import { z } from 'zod'

export const changeEmailSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'The e-mail address is required' })
    .email({ message: 'Must be a valid e-mail address' }),
})

export type ChangeEmailFormType = z.infer<typeof changeEmailSchema>
