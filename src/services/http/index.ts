import { RequestError } from './error'
import { RequestReply } from './reply'
import { HttpClientTypes } from './types'

type BeforeRequestInput<
  RequestBody = any,
  RequestQuery = any,
  RequestHeaders = HttpClientTypes.Headers,
> = {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: RequestBody
  query?: RequestQuery
  headers: RequestHeaders
}

type HttpClientOptions<BaseErrorBody = any> = {
  baseUrl: string
  beforeRequest?: (request: BeforeRequestInput) => Promise<void>
  onError?: (error: RequestError<BaseErrorBody> | Error) => Promise<void>
  onReply?: (reply: RequestReply) => Promise<void>
}

type ExecuteRequestInput<
  RequestBody = any,
  RequestQuery = HttpClientTypes.Query,
> = {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: RequestBody
  query?: RequestQuery
  headers?: HttpClientTypes.Headers
}

type GetOptions<ReplyQuery = any> = {
  query?: ReplyQuery
}

type PostOptions<Headers = HttpClientTypes.Headers> = {
  headers?: Headers
}

export class HttpClient<BaseErrorBody = any> {
  constructor(private readonly options: HttpClientOptions<BaseErrorBody>) {}

  private mountQueryParams(params: HttpClientTypes.Query) {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  }

  private mountHeaders(input: HttpClientTypes.Headers) {
    return Object.entries(input).reduce<HttpClientTypes.Headers>(
      (headers, [key, value]) => {
        headers[key] = String(value)

        return headers
      },
      {},
    )
  }

  private mountUrl<QueryParams = HttpClientTypes.Query>(
    endpoint: string,
    query?: QueryParams,
  ) {
    const baseUrl = this.options.baseUrl.trim().replace(/\/$/, '')
    const endpointUrl = endpoint.trim().replace('/', '').replace(/\/$/, '')

    let uri = `${baseUrl}/${endpointUrl}`

    if (query) {
      uri += this.mountQueryParams(query)
    }

    return uri
  }

  private async executeRequest<
    ReplyBody = any,
    RequestBody = any,
    RequestQuery = HttpClientTypes.Query,
    ErrorBody = BaseErrorBody,
  >(input: ExecuteRequestInput<RequestBody, RequestQuery>) {
    return new Promise<RequestReply<ReplyBody>>(async (resolve, reject) => {
      const requestData = {
        endpoint: input.endpoint,
        method: input.method,
        headers: input.headers || {},
        body: input.body,
        query: input.query,
      }

      try {
        if (this.options.beforeRequest) {
          await this.options.beforeRequest(requestData)
        }

        const uri = this.mountUrl(requestData.endpoint, requestData.query)

        // eslint-disable-next-line no-undef
        const options: RequestInit = {
          method: requestData.method,
          headers: this.mountHeaders(requestData.headers),
        }

        if (requestData.body) {
          options.body = JSON.stringify(requestData.body)
        }

        const response = await fetch(uri, options)

        const contentLength = response.headers.get('Content-Length')

        let responseBody = null

        if (Number(contentLength) > 0) {
          responseBody = await response.json()
        }

        if (!response.ok) {
          throw new RequestError<ErrorBody>({
            status: response.status,
            message: response.statusText,
            body: responseBody,
          })
        }

        const reply = new RequestReply<ReplyBody>({
          status: response.status,
          body: responseBody,
        })

        if (this.options.onReply) {
          await this.options.onReply(reply)
        }

        resolve(reply)
      } catch (error) {
        if (this.options.onError) {
          await this.options.onError(error as Error)
        }

        reject(error)
      }
    })
  }

  post<ReplyBody = any, RequestBody = any, ErrorBody = BaseErrorBody>(
    endpoint: string,
    body: RequestBody,
    options: PostOptions = {},
  ) {
    return this.executeRequest<ReplyBody, RequestBody, void, ErrorBody>({
      endpoint,
      method: 'POST',
      body,
      headers: options.headers,
    })
  }

  get<ReplyBody = any, ReplyQuery = any, ErrorBody = BaseErrorBody>(
    endpoint: string,
    options?: GetOptions<ReplyQuery>,
  ) {
    return this.executeRequest<ReplyBody, void, ReplyQuery, ErrorBody>({
      endpoint,
      method: 'GET',
      query: options?.query,
    })
  }
}
