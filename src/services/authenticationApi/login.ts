import { authenticationApi } from '.';

export type SignInRequest = {
  email: string;
  password: string;
}

export type SignInResponse = {
  access_token: string;
}

export function login(data: SignInRequest){
  return authenticationApi.post<SignInResponse>('/v1/authentication/login', data);
}
