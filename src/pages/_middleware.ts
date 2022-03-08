import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '') {
    const nextUrlClone = req.nextUrl.clone();

    nextUrlClone.pathname = '/sign/in';

    return NextResponse.redirect(nextUrlClone, 307);
  }

  return NextResponse.next();
}
