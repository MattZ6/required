import type { NextRequest } from 'next/server';

import { checkPreviousAuthentication } from '@utils/middlewares';

export function middleware(req: NextRequest) {
  return checkPreviousAuthentication(req);
}
