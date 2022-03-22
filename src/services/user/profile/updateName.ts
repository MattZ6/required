import { useMutation } from 'react-query';

import { apiClient } from '@services/apiClient';

export namespace UpdateProfileNameService {
  export type Request = {
    name: string;
  };

  export type Response = void;
}

export async function updateName(data: UpdateProfileNameService.Request) {
  await apiClient.patch<UpdateProfileNameService.Response>(
    '/v1/profile/name',
    data
  );
}

export function useUpdateName() {
  return useMutation(updateName);
}
