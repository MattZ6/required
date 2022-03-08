import Router from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { saveAuthOnCookies } from '@services/apiClient';
import {
  Authentication,
  signIn as authenticateUser,
  SignInService,
} from '@services/user/auth';

import {
  removeAuthTokenFromCookies,
  removeRefreshTokenFromCookies,
} from '@utils/auth-cookies';

type AuthContextData = {
  signIn: (data: SignInService.Request) => Promise<void>;
  signOut: () => void;
  removePreviousAuth: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: ReactNode;
};

function removePreviousAuth() {
  removeAuthTokenFromCookies();

  Router.replace('/sign/in');
}

function signOut() {
  removeRefreshTokenFromCookies();

  Router.replace('/welcome-back');
}

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<Authentication | undefined>();

  const signIn = useCallback(async (data: SignInService.Request) => {
    const response = await authenticateUser(data);

    setAuth(response);
    saveAuthOnCookies(response);

    Router.replace('/profile', '/profile');
  }, []);

  const data = useMemo<AuthContextData>(
    () => ({
      signIn,
      signOut,
      removePreviousAuth,
    }),
    [signIn]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
