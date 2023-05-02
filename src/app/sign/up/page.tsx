import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign up',
}

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign up</h1>

      <Link href="/sign/in">Sign in</Link>
    </div>
  )
}
