import { requiredClient } from './client'

export namespace UpdatePasswordService {
  export type Input = {
    old_password: string
    new_password: string
    new_password_confirmation: string
  }

  type Output = void

  export function execute(input: Input) {
    return requiredClient.Patch<Output>('/v1/profile/password', input, {
      name: 'update-password',
    })
  }
}
