import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@services/apiClient'

import { GetProfileService } from './getProfile'

export namespace UpdateProfileNameService {
  export type Request = {
    name: string
  }

  export type Response = void
}

export async function updateName(data: UpdateProfileNameService.Request) {
  await apiClient.patch<UpdateProfileNameService.Response>(
    '/v1/profile/name',
    data,
  )
}

export function useUpdateName() {
  const queryClient = useQueryClient()

  return useMutation(updateName, {
    onSuccess: (_, variables) => {
      const profile = queryClient.getQueryData<GetProfileService.Response>([
        'profile',
      ])

      if (profile) {
        profile.name = variables.name
      }
    },
  })
}
