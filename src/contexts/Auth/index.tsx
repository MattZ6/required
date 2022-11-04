import Router from 'next/router'
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'

import { saveAuthentication } from '@services/apiClient'
import {
  Authentication,
  signIn as authenticateUser,
  SignInService,
} from '@services/user/auth'

import {
  removeAuthTokenFromCookies,
  removeRefreshTokenFromCookies,
} from '@utils/auth-cookies'

type AuthContextData = {
  isAuthenticated: boolean
  signIn: (data: SignInService.Request) => Promise<void>
  signOut: () => void
  removePreviousAuth: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type Props = {
  children: ReactNode
}

function removePreviousAuth() {
  removeAuthTokenFromCookies()

  Router.replace('/sign/in')
}

export function AuthProvider({ children }: Props) {
  const queryClient = useQueryClient()

  const [auth, setAuth] = useState<Authentication | undefined>()

  const signIn = useCallback(async (data: SignInService.Request) => {
    const response = await authenticateUser(data)

    setAuth(response)
    saveAuthentication(response)

    Router.replace('/profile')
  }, [])

  const signOut = useCallback(() => {
    removeRefreshTokenFromCookies()

    setAuth(undefined)
    queryClient.invalidateQueries('profile')

    Router.replace('/welcome-back')
  }, [queryClient])

  const data = useMemo<AuthContextData>(() => {
    return {
      signIn,
      signOut,
      removePreviousAuth,
      isAuthenticated: !!auth,
    }
  }, [signIn, signOut, auth])

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
