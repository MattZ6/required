import axios, { AxiosError } from 'axios';
import Router from 'next/router';

import {
  getAuthCookies,
  removeRefreshTokenFromCookies,
  setAuthCookies,
} from '@utils/auth-cookies';
import { parseRequestError } from '@utils/parseRequestError';

import { refreshToken } from './user/auth';
import { Authentication } from './user/auth/common.types';

type FailedRequest = {
  onSuccess: (updatedAccessToken: string) => void;
  onFailure: (error: AxiosError) => void;
};

let isRefreshing = false;
let failedRequestsQueue: FailedRequest[] = [];

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

  function saveAuthentication(data: Authentication) {
    setAccessTokenOnDefaultHeaders(data);
    setAuthCookies(data, context);
  }

  const initialCookies = getAuthCookies(context);

  setAccessTokenOnDefaultHeaders(initialCookies);

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        const parsedError = parseRequestError(error);

        if (parsedError.error?.code === 'token.expired') {
          const currentCookies = getAuthCookies(context);

          const originalRequestConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            refreshToken({
              refresh_token: String(currentCookies.refresh_token),
            })
              .then(response => {
                saveAuthentication(response);

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(response.access_token)
                );
                failedRequestsQueue = [];
              })
              .catch((refreshTokenError: AxiosError) => {
                failedRequestsQueue.forEach(request =>
                  request.onFailure(refreshTokenError)
                );
                failedRequestsQueue = [];

                if (typeof window === 'undefined') {
                  return Promise.reject(new Error('Auth error'));
                }

                removeRefreshTokenFromCookies();

                Router.replace('/welcome-back');

                return refreshTokenError;
              })
              .finally(() => {
                isRefreshing = false;
              });

            return new Promise((resolve, reject) => {
              failedRequestsQueue.push({
                onSuccess: (updatedAccessToken: string) => {
                  const headers = originalRequestConfig.headers ?? {};

                  headers['X-Access-Token'] = updatedAccessToken;

                  originalRequestConfig.headers = headers;

                  resolve(api(originalRequestConfig));
                },
                onFailure: (onFailureError: AxiosError) => {
                  reject(onFailureError);
                },
              });
            });
          }
        } else if (typeof window !== 'undefined') {
          removeRefreshTokenFromCookies();

          Router.replace('/welcome-back');
        } else {
          return Promise.reject(new Error('Auth error'));
        }
      }

      return Promise.reject(error);
    }
  );

  return {
    api,
    saveAuthentication,
  };
}
