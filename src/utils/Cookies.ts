import { setCookie, getCookie, deleteCookie, hasCookie } from 'cookies-next'

export namespace CookiesUtils {
  type Key = string[]

  const isServer = typeof window === 'undefined'

  function mountKey(keys: Key) {
    const BASE_KEY = 'required'

    const keysList: string[] = [BASE_KEY]

    if (Array.isArray(keys)) {
      keysList.push(...keys)
    } else {
      keysList.push(keys)
    }

    return keysList.join('.')
  }

  type StoreInput<T = any> = {
    key: Key
    data: T
  }

  export async function store<T>(input: StoreInput<T>) {
    const parsedKey = mountKey(input.key)
    const data =
      typeof input.data === 'string' ? input.data : JSON.stringify(input.data)

    const options = {
      path: '/',
      maxAge: 30 * 24 * 60 * 60, // 👈 30 days
    }

    setCookie(parsedKey, data, options)

    // if (isServer) {
    //   const { cookies } = await import('next/headers')

    //   cookies().set(parsedKey, data, options)
    //   // } else {
    // }
  }

  export async function retrieve<T = any>(key: Key) {
    let data: T | null = null

    const parsetKey = mountKey(key)

    if (isServer) {
      const { cookies } = await import('next/headers')

      const cookie = cookies().get(parsetKey)

      if (cookie) {
        try {
          data = JSON.parse(cookie.value)
        } catch (error) {
          if (error instanceof SyntaxError) {
            return cookie.value
          } else {
            throw error
          }
        }
      }
    } else {
      const cookie = getCookie(parsetKey)

      if (cookie) {
        try {
          data = JSON.parse(String(cookie))
        } catch (error) {
          if (error instanceof SyntaxError) {
            return cookie
          } else {
            throw error
          }
        }
      }
    }

    return data
  }

  export async function destroy(key: Key) {
    const parsedKey = mountKey(key)

    if (isServer) {
      const { cookies } = await import('next/headers')

      cookies().delete(parsedKey)
    } else {
      deleteCookie(mountKey(key))
    }
  }

  export async function some(key: Key) {
    const parsedKey = mountKey(key)

    if (isServer) {
      const { cookies } = await import('next/headers')

      return cookies().has(parsedKey)
    } else {
      return hasCookie(mountKey(key))
    }
  }
}
