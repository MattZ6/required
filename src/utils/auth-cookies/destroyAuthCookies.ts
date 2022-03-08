import { destroyCookie } from 'nookies';

import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from './common.types';

export function destroyAuthCookies(context?: any) {
  destroyCookie(context, ACCESS_TOKEN_COOKIE_KEY);
  destroyCookie(context, REFRESH_TOKEN_COOKIE_KEY);
}
