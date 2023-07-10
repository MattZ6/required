import { useCallback, useState } from 'react'

type Status = 'idle' | 'error' | 'mutating' | 'success'
type Fetcher<Data = unknown, Input = unknown> = (input: Input) => Promise<Data>
type Options<Data = unknown> = {
  onSuccess?: (data: Data) => void
}

export function useMutation<Data = unknown, Input = unknown>(
  fetcher: Fetcher<Data, Input>,
  options: Options<Data> = {},
) {
  const [status, setStatus] = useState<Status>('idle')

  const mutate = useCallback(
    async (input: Input) => {
      setStatus('mutating')

      try {
        const response = await fetcher(input)

        setStatus('success')

        if (options.onSuccess) {
          options.onSuccess(response)
        }

        return response
      } catch (error) {
        setStatus('error')

        throw error
      }
    },
    [fetcher, options],
  )

  return {
    isMutating: status === 'mutating',
    mutate,
  }
}
