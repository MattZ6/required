import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// import { getAuthCookiesFromCookies } from '@utils/auth-cookies';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '') {
    // console.log('ENTROU AQUI');

    // const cookies = getAuthCookiesFromCookies(req.cookies);

    const nextUrlClone = req.nextUrl.clone();

    nextUrlClone.pathname = '/sign/in';

    // if (cookies.refresh_token) {
    //   nextUrlClone.pathname = '/profile';
    // }

    // if (cookies.access_token) {
    //   nextUrlClone.pathname = '/welcome-back';
    // }

    return NextResponse.redirect(nextUrlClone);
  }

  return NextResponse.next();
}
