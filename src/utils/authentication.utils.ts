import Cookies from 'js-cookie';

const ACCESS_TOKEN_COOKIE_KEY = `${process.env.NEXT_PUBLIC_SUFFIX}_AccessToken`;
const PROFILE_COOKIE_KEY = `${process.env.NEXT_PUBLIC_SUFFIX}_Profile`;

type Cookies = {
  [key: string]: string;
}

export function setAccessTokenCookie(accessToken: string) {
  Cookies.set(ACCESS_TOKEN_COOKIE_KEY, accessToken);
}

export function getAccessTokenFromCookies(cookies: Cookies): string | undefined {
  return cookies[ACCESS_TOKEN_COOKIE_KEY];
}

export function getAccessTokenCookie() {
  return Cookies.get(ACCESS_TOKEN_COOKIE_KEY);
}

export function removeAccessTokenCookie() {
  Cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
}

type ProfileCookie = {
  name: string;
  email: string;
}

export function setProfileCookie(data: ProfileCookie) {
  Cookies.set(PROFILE_COOKIE_KEY, JSON.stringify(data));
}

export function getProfileDataFromCookies(cookies: Cookies): ProfileCookie | undefined {
  const data = cookies[PROFILE_COOKIE_KEY];

  if (!data) {
    return undefined;
  }

  return JSON.parse(data);
}

export function removeProfileCookie() {
  Cookies.remove(PROFILE_COOKIE_KEY);
}
