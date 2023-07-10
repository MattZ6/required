import { HttpClientTypes } from './types'

type RequestReplyInput<Body, Headers> = {
  status: number
  body: Body
  headers?: Headers
}

export class RequestReply<Body = any, Headers = HttpClientTypes.Headers> {
  public readonly statusCode: number
  public readonly body: Body
  public readonly headers?: Headers

  constructor(input: RequestReplyInput<Body, Headers>) {
    this.statusCode = input.status
    this.headers = input.headers
    this.body = input.body
  }
}
