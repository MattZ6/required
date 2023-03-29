import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@services/apiClient'

import { GetProfileService } from './getProfile'

export namespace UpdateProfileEmailService {
  export type Request = {
    email: string
  }

  export type Response = void
}

export async function updateEmail(data: UpdateProfileEmailService.Request) {
  await apiClient.patch<UpdateProfileEmailService.Response>(
    '/v1/profile/email',
    data,
  )
}

export function useUpdateEmail() {
  const queryClient = useQueryClient()

  return useMutation(updateEmail, {
    onSuccess: (_, variables) => {
      const profile = queryClient.getQueryData<GetProfileService.Response>([
        'profile',
      ])

      if (profile) {
        profile.email = variables.email
      }
    },
  })
}
