import axios from 'axios';

import { getAuthCookies, setAuthCookies } from '@utils/auth-cookies';

import { Authentication } from './user/auth/common.types';

export function makeApiClient(context?: any) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  function setAccessTokenOnDefaultHeaders(
    authentication: Partial<Authentication>
  ) {
    if (authentication.access_token) {
      api.defaults.headers.common['X-Access-Token'] =
        authentication.access_token;
      (api.defaults.headers as any)['X-Access-Token'] =
        authentication.access_token;
    }
  }

  const cookies = getAuthCookies(context);

  setAccessTokenOnDefaultHeaders(cookies);

  function saveAuthentication(data: Authentication) {
    setAccessTokenOnDefaultHeaders(data);
    setAuthCookies(data, context);
  }

  return {
    api,
    saveAuthentication,
  };
}
