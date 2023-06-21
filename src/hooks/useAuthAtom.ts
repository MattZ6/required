import { useAtom } from 'jotai'

import { authAtom } from '../atoms/auth'

export function useAuthAtom() {
  return useAtom(authAtom)
}
