import { authenticationApi } from '.';

export type Profile = {
  id: string;
  name: string;
  email: string;
}

export type GetProfileResponse = Profile;

export function getProfile(){
  return authenticationApi.get<GetProfileResponse>('/v1/profile');
}
