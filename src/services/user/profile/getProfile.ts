import { useQuery } from 'react-query';

import { apiClient } from '@services/apiClient';

export namespace GetProfileService {
  export type Profile = {
    id: string;
    name: string;
    email: string;
  };

  export type Response = Profile;
}

export async function getProfile() {
  const response = await apiClient.get<GetProfileService.Response>(
    '/v1/profile'
  );

  return response.data;
}

export function useProfile() {
  return useQuery('profile', getProfile, { refetchOnWindowFocus: false });
}
