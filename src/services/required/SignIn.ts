import { requiredClient } from './client'

export namespace SignInService {
  export type Input = {
    email: string
    password: string
  }

  type Output = {
    access_token: string
    refresh_token: string
  }

  export function execute(input: Input) {
    return requiredClient.Post<Output>('/v1/auth/sign/in', input, {
      name: 'sign-in',
    })
  }
}
