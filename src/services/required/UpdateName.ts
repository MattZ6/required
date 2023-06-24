import { requiredClient } from './client'

export namespace UpdateNameService {
  export type Input = {
    name: string
  }

  type Output = void

  export function execute(input: Input) {
    return requiredClient.Patch<Output>('/v1/profile/name', input, {
      name: 'update-name',
    })
  }
}
