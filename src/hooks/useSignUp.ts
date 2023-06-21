import { useRequest } from 'alova'

import { SignUpService } from '@services/required/SignUp'

export function useSignUp() {
  return useRequest((input) => SignUpService.execute(input), {
    immediate: false,
  })
}
