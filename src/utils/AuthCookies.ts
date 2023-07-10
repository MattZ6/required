import { CookiesUtils } from './Cookies'

export namespace AuthCookiesUtils {
  const ACCESS_TOKEN_KEY = 't'
  const REFRESH_TOKEN_KEY = 'r'

  export function storeAccessToken(accessToken: string) {
    CookiesUtils.store({
      key: [ACCESS_TOKEN_KEY],
      data: accessToken,
    })
  }

  export function storeRefreshToken(refreshToken: string) {
    CookiesUtils.store({
      key: [REFRESH_TOKEN_KEY],
      data: refreshToken,
    })
  }

  export function getAccessToken() {
    return CookiesUtils.retrieve<string>([ACCESS_TOKEN_KEY])
  }

  export function getRefreshToken() {
    return CookiesUtils.retrieve<string>([REFRESH_TOKEN_KEY])
  }

  export function destroyAccessToken() {
    CookiesUtils.destroy([ACCESS_TOKEN_KEY])
  }

  export function destroyRefreshToken() {
    CookiesUtils.destroy([REFRESH_TOKEN_KEY])
  }
}
