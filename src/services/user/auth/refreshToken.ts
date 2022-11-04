import { apiClient } from '@services/apiClient'

import { Authentication } from './common.types'

export namespace RefreshTokenService {
  export type Request = {
    refresh_token: string
  }

  export type Response = Authentication
}

export async function refreshToken(data: RefreshTokenService.Request) {
  const response = await apiClient.post<RefreshTokenService.Response>(
    '/v1/auth/refresh',
    data,
  )

  return response.data
}
