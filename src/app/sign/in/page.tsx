import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function SignInPage() {
  return (
    <div>
      <h1>Sign in</h1>

      <Link href="/sign/up">Sign up</Link>
    </div>
  )
}
