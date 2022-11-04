import { useMutation } from 'react-query'

import { apiClient } from '@services/apiClient'

export namespace UpdateProfilePasswordService {
  export type Request = {
    old_password: string
    new_password: string
    new_password_confirmation: string
  }

  export type Response = void
}

export async function updatePassword(
  data: UpdateProfilePasswordService.Request,
) {
  await apiClient.patch<UpdateProfilePasswordService.Response>(
    '/v1/profile/password',
    data,
  )
}

export function useUpdatePassword() {
  return useMutation(updatePassword)
}
