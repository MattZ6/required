/* eslint-disable @next/next/no-server-import-in-page */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getAuthCookiesFromCookies } from '@utils/auth-cookies';

export function checkAuthentication(req: NextRequest) {
  const cookies = getAuthCookiesFromCookies(req.cookies);

  if (!cookies.access_token) {
    const nextUrlClone = req.nextUrl.clone();

    nextUrlClone.pathname = '/sign/in';

    return NextResponse.redirect(nextUrlClone, 307);
  }

  if (!cookies.refresh_token) {
    const nextUrlClone = req.nextUrl.clone();

    nextUrlClone.pathname = '/welcome-back';

    return NextResponse.redirect(nextUrlClone, 307);
  }

  return NextResponse.next();
}
