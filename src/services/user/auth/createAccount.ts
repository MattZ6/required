import { useMutation } from 'react-query'

import { apiClient } from '@services/apiClient'

export namespace CreateAccountService {
  export type Request = {
    name: string
    email: string
    password: string
    password_confirmation: string
  }

  export type Response = void
}

export async function createAccount(data: CreateAccountService.Request) {
  const response = await apiClient.post<CreateAccountService.Response>(
    '/v1/auth/sign/up',
    data,
  )

  return response.data
}

export function useCreateAccount() {
  return useMutation(createAccount)
}
