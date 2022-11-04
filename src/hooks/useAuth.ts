import { useContext } from 'react'

import { AuthContext } from '@contexts/Auth'

export function useAuth() {
  return useContext(AuthContext)
}
