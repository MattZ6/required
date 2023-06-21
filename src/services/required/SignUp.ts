import { requiredClient } from './client'

export namespace SignUpService {
  export type Input = {
    name: string
    email: string
    password: string
    password_confirmatin: string
  }

  type Output = void

  export function execute(input: Input) {
    return requiredClient.Post<Output>('/v1/auth/sign/up', input, {
      name: 'sign-up',
    })
  }
}
