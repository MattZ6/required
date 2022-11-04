import { z } from 'zod'

export const updateEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'update-profile-email.errors.email.required' })
    .email({ message: 'update-profile-email.errors.email.invalid' }),
})

export type UpdateEmailFormType = z.infer<typeof updateEmailSchema>
