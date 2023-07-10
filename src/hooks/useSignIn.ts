import { useCallback } from 'react'

import { useMutation } from '@hooks/useMutation'

import { SignInService } from '@services/new-required/SignIn'

import { AuthCookiesUtils } from '@utils/AuthCookies'

import { useAuthAtom } from './useAuthAtom'

export function useSignIn() {
  const [, setAuth] = useAuthAtom()

  const handleSuccess = useCallback(
    (output: SignInService.Output) => {
      AuthCookiesUtils.storeAccessToken(output.access_token)
      AuthCookiesUtils.storeRefreshToken(output.refresh_token)

      setAuth(output)
    },
    [setAuth],
  )

  return useMutation(SignInService.execute, {
    onSuccess: handleSuccess,
  })
}
