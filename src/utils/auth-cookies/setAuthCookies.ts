import { setCookie } from 'nookies';

import { Authentication } from '@services/user/auth';

import {
  ACCESS_TOKEN_COOKIE_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from './common.types';

export function setAuthCookies(data: Authentication, context?: any) {
  setCookie(context, ACCESS_TOKEN_COOKIE_KEY, data.access_token, {
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 👈 30 days
  });

  setCookie(context, REFRESH_TOKEN_COOKIE_KEY, data.refresh_token, {
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 👈 30 days
  });
}
