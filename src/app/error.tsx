'use client'

import { useEffect } from 'react'

import { RequestError } from '@services/HttpClient'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    if (error instanceof RequestError) {
      console.log(error.body)
    } else {
      console.error(error)
    }
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
