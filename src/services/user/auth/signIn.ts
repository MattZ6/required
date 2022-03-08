import { apiClient } from '@services/apiClient';

import { Authentication } from './common.types';

export namespace SignInService {
  export type Request = {
    email: string;
    password: string;
  };

  export type Response = Authentication;
}

export async function signIn(data: SignInService.Request) {
  const response = await apiClient.post<SignInService.Response>(
    '/v1/authentication/login',
    data
  );

  return response.data;
}
