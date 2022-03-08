/* eslint-disable @next/next/no-server-import-in-page */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getAuthCookiesFromCookies } from '@utils/auth-cookies';

export function checkGuest(req: NextRequest) {
  const cookies = getAuthCookiesFromCookies(req.cookies);

  if (cookies.access_token) {
    const nextUrlClone = req.nextUrl.clone();

    nextUrlClone.pathname = '/profile';

    return NextResponse.redirect(nextUrlClone, 307);
  }

  return NextResponse.next();
}
