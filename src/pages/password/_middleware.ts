import type { NextRequest } from 'next/server';

import { checkGuest } from '@utils/middlewares';

export function middleware(req: NextRequest) {
  return checkGuest(req);
}
