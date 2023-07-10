type Headers = {
  [_: string]: string
}

type RequestReplyInput<B = unknown, H = unknown> = {
  status: number
  body?: B
  headers?: H
}

class RequestReply<B = any, H = Headers> {
  public readonly statusCode: number
  public readonly headers?: H
  public readonly body?: B

  constructor(input: RequestReplyInput<B, H>) {
    this.statusCode = input.status
    this.headers = input.headers
    this.body = input.body
  }
}

type RequestErrorInput = {
  status: number
  message?: string
  body?: any
  headers?: any
}

export class RequestError {
  public readonly statusCode: number
  public readonly headers?: any
  public readonly body?: any

  constructor(input: RequestErrorInput) {
    this.statusCode = input.status
    this.headers = input.headers
    this.body = input.body
  }
}

type Options = {
  baseUrl: string
}

type ExecuteRequestInput<B = any, H = any, P = any> = {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  type?: 'json'
  body?: B
  headers?: H
  params?: P
}

type Response<B = any, H = any> = {
  headers?: H
  body: B
}

type MountHeadersInput = {
  [_: string]: string | number | boolean
}

export class HttpClientService {
  constructor(private readonly options: Options) {}

  private mountUrl(endpoint: string) {
    const base = this.options.baseUrl.trim()
    let resourceUrl = endpoint.trim()

    if (resourceUrl.startsWith('/')) {
      resourceUrl = resourceUrl.replace('/', '')
    }

    return `${base}/${resourceUrl}`
  }

  private mountHeaders(input: MountHeadersInput) {
    return Object.entries(input).reduce<Headers>((headers, [key, value]) => {
      headers[key] = String(value)

      return headers
    }, {})
  }

  private async executeRequest<ResponseBody = any>(input: ExecuteRequestInput) {
    const response = await fetch(this.mountUrl(input.endpoint), {
      method: input.method,
      headers: this.mountHeaders(input.headers ?? {}),
    })

    const contentLength = response.headers.get('Content-Length')

    let responseBody = null

    if (Number(contentLength) > 0) {
      responseBody = await response.json()
    }

    if (response.status < 200 || response.status >= 400) {
      return new RequestError({
        status: response.status,
        message: response.statusText,
        body: responseBody,
      })
    }

    return new RequestReply<ResponseBody>({
      status: response.status,
      body: responseBody,
    })
  }

  get<B = any>(url: string) {
    return this.executeRequest<B>({
      endpoint: url,
      method: 'GET',
    })
  }
}
