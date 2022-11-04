import { setCookie } from 'nookies'

import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from './common.types'

export function removeAuthTokenFromCookies(context: any = undefined) {
  setCookie(context, ACCESS_TOKEN_COOKIE_KEY, '', {
    path: '/',
    maxAge: -1,
  })
}

export function removeRefreshTokenFromCookies(context: any = undefined) {
  setCookie(context, REFRESH_TOKEN_COOKIE_KEY, '', {
    path: '/',
    maxAge: -1,
  })
}

export function destroyAuthCookies(context: any = undefined) {
  removeAuthTokenFromCookies(context)
  removeRefreshTokenFromCookies(context)
}
