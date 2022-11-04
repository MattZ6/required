import { parseCookies } from 'nookies'

import { Authentication } from '@services/user/auth/common.types'

import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from './common.types'

export function getAuthCookies(context?: any): Partial<Authentication> {
  const cookies = parseCookies(context)

  return {
    access_token: cookies[ACCESS_TOKEN_COOKIE_KEY],
    refresh_token: cookies[REFRESH_TOKEN_COOKIE_KEY],
  }
}

export function getAuthCookiesFromCookies(cookies: {
  [key: string]: string
}): Partial<Authentication> {
  return {
    access_token: cookies[ACCESS_TOKEN_COOKIE_KEY],
    refresh_token: cookies[REFRESH_TOKEN_COOKIE_KEY],
  }
}
