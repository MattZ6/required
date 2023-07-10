import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'
import { getCookie } from 'cookies-next'

export const requiredClient = createAlova({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook,
  beforeRequest: (request) => {
    const accessToken = getCookie('required.t')

    request.config.headers.Accept = 'application/json'
    request.config.headers['Content-Type'] = 'application/json;charset=UTF-8'

    if (accessToken) {
      request.config.headers['X-Access-Token'] = accessToken
    }
  },
  responded: {
    onSuccess: async (response) => {
      const contentLength = response.headers.get('Content-Length')

      if (Number(contentLength) === 0) {
        return
      }

      const body = await response.json()

      if (response.status < 200 || response.status >= 400) {
        throw body ?? new Error(response.statusText)
      }

      return body
    },
  },
})
