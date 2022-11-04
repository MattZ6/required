import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getAuthCookiesFromCookies } from '@utils/auth-cookies'

export function checkPreviousAuthentication(req: NextRequest) {
  const cookies = getAuthCookiesFromCookies(req.cookies as any)

  if (!cookies.refresh_token && cookies.access_token) {
    return NextResponse.next()
  }

  const nextUrlClone = req.nextUrl.clone()

  nextUrlClone.pathname = '/sign/in'

  if (cookies.refresh_token) {
    nextUrlClone.pathname = '/profile'
  }

  return NextResponse.redirect(nextUrlClone, 307)
}
