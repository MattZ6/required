import { useRequest } from 'alova'

import { SignInService } from '@services/required/SignIn'

export function useSignIn() {
  return useRequest((input) => SignInService.execute(input), {
    immediate: false,
  })
}
