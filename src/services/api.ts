import axios from 'axios';

import { setAuthCookies } from '@utils/auth-cookies';

import { Authentication } from './user/auth/common.types';

export function makeApiClient(context?: any) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  function saveAuthOnCookies(data: Authentication) {
    setAuthCookies(data, context);
  }

  return {
    api,
    saveAuthOnCookies,
  };
}
