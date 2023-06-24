import { requiredClient } from './client'

export namespace UpdateEmailService {
  export type Input = {
    email: string
  }

  type Output = void

  export function execute(input: Input) {
    return requiredClient.Patch<Output>('/v1/profile/email', input, {
      name: 'update-email',
    })
  }
}
