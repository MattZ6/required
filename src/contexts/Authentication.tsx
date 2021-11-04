import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { authenticationApi } from '@services/authenticationApi';
import { login as authenticationApiLogin } from '@services/authenticationApi/login';
import { getProfile as authenticationApigGetProfile, Profile } from '@services/authenticationApi/getProfile';

import {
  getAccessTokenCookie,
  removeAccessTokenCookie,
  removeProfileCookie,
  setAccessTokenCookie,
  setProfileCookie
} from '@utils/authentication.utils';

type LoginData = {
  email: string;
  password: string;
}

type AuthenticationContextData = {
  profile?: Profile;
  login: (data: LoginData) => Promise<void>;
  signOut: () => void;
  loadProfile: () => Promise<void>;
  forgetLastLogin: () => void;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

type AuthenticationProviderProps = {
  children: ReactNode;
}

function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [profile,
    setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    const accessToken = getAccessTokenCookie();

    if (accessToken) {
      setAccessTokenCookie(accessToken);
      authenticationApi.defaults.headers.common.authorization = `Bearer ${accessToken}`;
    }
  }, []);

  const loadProfile = useCallback(async () => {
    const { data } = await authenticationApigGetProfile();

    setProfileCookie({ email: data.email, name: data.name });
    setProfile(data);
  }, []);

  const login = useCallback(async (data: LoginData) => {
    const response = await authenticationApiLogin(data);

    const { access_token } = response.data;

    setAccessTokenCookie(access_token);
    authenticationApi.defaults.headers.common.authorization = `Bearer ${access_token}`;
  }, []);

  const signOut = useCallback(() => {
    authenticationApi.defaults.headers.common.authorization = '';

    removeAccessTokenCookie();

    setProfile(undefined);
  }, []);

  const forgetLastLogin = useCallback(() => {
    removeProfileCookie();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        profile,
        login,
        signOut,
        loadProfile,
        forgetLastLogin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);

  return context;
}

export { AuthenticationProvider, useAuthentication };
