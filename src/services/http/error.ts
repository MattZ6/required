import { HttpClientTypes } from './types'

type RequestErrorInput<Body, Headers> = {
  status: number
  message?: string
  body: Body
  headers?: Headers
}

export class RequestError<Body = any, Headers = HttpClientTypes.Headers> {
  public readonly statusCode: number
  public readonly body: Body
  public readonly headers?: Headers

  constructor(input: RequestErrorInput<Body, Headers>) {
    this.statusCode = input.status
    this.headers = input.headers
    this.body = input.body
  }
}

export function isRequestError<Body = any>(
  error: any,
): error is RequestError<Body> {
  return error instanceof RequestError
}
