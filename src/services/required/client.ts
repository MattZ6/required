import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

export const requiredClient = createAlova({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook,
  beforeRequest: (request) => {
    request.config.headers.Accept = 'application/json'
    request.config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  },
  responded: {
    onSuccess: async (response) => {
      const body = await response.json()

      if (response.status < 200 || response.status >= 400) {
        throw body ?? new Error(response.statusText)
      }

      return body
    },
  },
})
