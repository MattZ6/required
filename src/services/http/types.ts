export namespace HttpClientTypes {
  export type Headers = {
    'Content-Type'?: 'application/json;charset=UTF-8'
    'X-Access-Token'?: string
  } & { [_: string]: string }

  export type Query = {
    [_: string]: string | number | boolean
  }
}
