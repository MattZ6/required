import axios from 'axios';

import { getAuthCookies, setAuthCookies } from '@utils/auth-cookies';

import { Authentication } from './user/auth/common.types';

export function makeApiClient(context?: any) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  const cookies = getAuthCookies(context);

  if (cookies.access_token) {
    api.defaults.headers.common['X-Access-Token'] = cookies.access_token;
    (api.defaults.headers as any)['X-Access-Token'] = cookies.access_token;
  }

  function saveAuthOnCookies(data: Authentication) {
    setAuthCookies(data, context);
  }

  return {
    api,
    saveAuthOnCookies,
  };
}
