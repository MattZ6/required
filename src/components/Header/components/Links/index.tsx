'use client'

import Link from 'next/link'

import { useAuthAtom } from '@hooks/useAuthAtom'

import styles from './styles.module.scss'

export function Links() {
  const [auth] = useAuthAtom()

  if (!auth) {
    return (
      <>
        <Link className={styles.link} href="/sign/in">
          Login
        </Link>
        <Link className={styles.link} href="/sign/up">
          Create account
        </Link>
      </>
    )
  }

  return (
    <>
      <Link className={styles.link} href="/">
        Profile
      </Link>
    </>
  )
}
