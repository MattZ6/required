import { atom } from 'jotai'

type Authentication = {
  access_token: string
  refresh_token: string
}

export const authAtom = atom<Authentication | null>(null)
