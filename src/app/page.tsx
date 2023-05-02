import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hey user',
}

export default function HomePage() {
  return (
    <div>
      <h1>Hey user</h1>

      <Link href="/change/name">Change name</Link>
      <Link href="/change/email">Change email address</Link>
      <Link href="/change/password">Change password</Link>
    </div>
  )
}
