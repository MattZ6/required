import Router from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {
  Authentication,
  signIn as authenticateUser,
  SignInService,
} from '@services/user/auth';

type AuthContextData = {
  signIn: (data: SignInService.Request) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<Authentication | undefined>();

  const signIn = useCallback(async (data: SignInService.Request) => {
    const response = await authenticateUser(data);

    setAuth(response);

    Router.replace('/profile');
  }, []);

  const data = useMemo<AuthContextData>(
    () => ({
      signIn,
    }),
    [signIn]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
