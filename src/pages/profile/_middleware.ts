import type { NextRequest } from 'next/server';

import { checkAuthentication } from '@utils/middlewares';

export function middleware(req: NextRequest) {
  return checkAuthentication(req);
}
