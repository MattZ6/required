import { useRequest } from 'alova'

import { UpdateNameService } from '@services/required/UpdateName'

export function useUpdateName() {
  return useRequest((input) => UpdateNameService.execute(input), {
    immediate: false,
  })
}
