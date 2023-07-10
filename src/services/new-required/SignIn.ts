import { requiredClient } from './client'

export namespace SignInService {
  export const ENDPOINT = 'auth/sign/in'

  export type Input = {
    email: string
    password: string
  }

  export type Output = {
    access_token: string
    refresh_token: string
  }

  export async function execute(input: Input) {
    const { body } = await requiredClient.post<Output, Input>(
      `/v1/${ENDPOINT}`,
      input,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Accept: 'application/json',
        },
      },
    )

    return body
  }
}
