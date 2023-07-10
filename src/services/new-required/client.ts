import chalk from 'chalk'
import { decodeJwt } from 'jose'

import { HttpClient } from '@services/http'
import { isRequestError } from '@services/http/error'

import { AuthCookiesUtils } from '@utils/AuthCookies'

import { RefreshAccessTokenService } from './RefreshAccessToken'
import { SignInService } from './SignIn'

export type RequiredApiErrorCode =
  | 'validation'
  | 'user.not.exists'
  | 'user.exists'
  | 'user.email_in_use'
  | 'password.wrong'
  | 'token.not.provided'
  | 'token.expired'
  | 'token.invalid'

type Validation<Field> = {
  type: string
  field: keyof Field
  value: string
  message: string
}

export type RequiredApiError<Field = any> = {
  code: RequiredApiErrorCode
  message: string
  validation?: Validation<Field>
}

export const requiredClient = new HttpClient<RequiredApiError>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'localhost:3333',
  beforeRequest: async ({ headers, endpoint }) => {
    const guestRoutes = [
      SignInService.ENDPOINT,
      RefreshAccessTokenService.ENDPOINT,
    ]

    const accessToken = await AuthCookiesUtils.getAccessToken()

    if (!accessToken) {
      return
    }

    headers['X-Access-Token'] = accessToken

    const claims = decodeJwt(accessToken)

    const isTokenValid =
      Number(Date.now().toString().slice(0, -4)) < Number(claims.exp)

    if (!isTokenValid) {
      const isGuestRoute = guestRoutes.some((url) => endpoint.includes(url))

      if (isGuestRoute) {
        return
      }

      const refreshToken = await AuthCookiesUtils.getRefreshToken()

      if (!refreshToken) {
        return
      }

      const auth = await RefreshAccessTokenService.execute({
        refresh_token: refreshToken,
      })

      await Promise.all([
        AuthCookiesUtils.storeAccessToken(auth.access_token),
        AuthCookiesUtils.storeRefreshToken(auth.refresh_token),
      ])

      headers['X-Access-Token'] = auth.access_token
    }
  },
  onError: async (error) => {
    if (isRequestError(error)) {
      console.log(chalk.red(`[${error.statusCode}] ${error.body.message}`))
    }
  },
})
