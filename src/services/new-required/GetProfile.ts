import { requiredClient } from './client'

export namespace GetProfileService {
  export type Profile = {
    id: string
    name: string
    email: string
  }

  type Output = Profile

  export async function execute() {
    const { body } = await requiredClient.get<Output>('/v1/profile')

    return body
  }
}
