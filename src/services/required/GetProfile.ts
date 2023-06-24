import { requiredClient } from './client'

export namespace GetProfileService {
  export type Profile = {
    id: string
    name: string
    email: string
  }

  type Output = Profile

  export function execute() {
    return requiredClient.Get<Output>('/v1/profile', {
      name: 'profile',
    })
  }
}
