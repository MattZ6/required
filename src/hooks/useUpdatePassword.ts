import { useRequest } from 'alova'

import { UpdatePasswordService } from '@services/required/UpdatePassword'

export function useUpdatePassword() {
  return useRequest((input) => UpdatePasswordService.execute(input), {
    immediate: false,
  })
}
