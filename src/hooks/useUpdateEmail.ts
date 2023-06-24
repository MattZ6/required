import { useRequest } from 'alova'

import { UpdateEmailService } from '@services/required/UpdateEmail'

export function useUpdateEmail() {
  return useRequest((input) => UpdateEmailService.execute(input), {
    immediate: false,
  })
}
