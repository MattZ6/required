import {
  DispatchWithoutAction,
  ReducerWithoutAction,
  useCallback,
  useReducer,
  useState,
} from 'react'

import { SignInService } from '@services/new-required/SignIn'

type Status = 'idle' | 'error' | 'loading' | 'success' | 'success_from_cache'
type Key = string[]
type Fetcher<Data = unknown, Input = unknown> = (input: Input) => Promise<Data>

export function useFetch<Data = any, Input = any, Error = any>(
  key: Key,
  fetcher: Fetcher<Data, Input>,
) {
  const [status, setStatus] = useState<Status>('idle')
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(
    async (input: Input) => {
      setStatus('loading')

      try {
        const response = await fetcher(input)

        setStatus('success')
        setData(response)

        return response
      } catch (error) {
        setStatus('error')
        setError(error as Error)
      }
    },
    [fetcher],
  )

  return {
    isLoading: status === 'loading',
    data,
    error,
    execute,
  }
}

type ActionType =
  | 'idle'
  | 'error'
  | 'loading'
  | 'success'
  | 'success_from_cache'

type Action<Data = any> = {
  type: ActionType
  payload: Data
}

type State<Data = any> = {
  data: Data | null
  isMutating: boolean
}

function mutationReducer<Data = any>(state: State<Data>, action: Action<Data>) {
  const { type, payload } = action

  switch (type) {
    case 'idle':
      return { ...state, isMutating: false, data: null }

    case 'loading':
      return { ...state, isMutating: true, data: null }

    case 'error':
      return { ...state, isMutating: false, data: null }

    case 'success':
      return { ...state, isMutating: false, data: payload }

    case 'success_from_cache':
      return { ...state, isMutating: false, data: payload }

    default:
      return state
  }
}

function useMutation<Data = any, Input = any>(fetcher: Fetcher<Data, Input>) {
  const [status, setStatus] = useState<Status>('idle')

  const mutate = useCallback(
    async (input: Input) => {
      setStatus('loading')

      try {
        const response = await fetcher(input)

        setStatus('success')

        return response
      } catch (error) {
        setStatus('error')
      }
    },
    [fetcher],
  )

  return {
    isMutating: status === 'loading',
    mutate,
  }
}
