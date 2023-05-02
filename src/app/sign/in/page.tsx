import type { Metadata } from 'next'
import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function SignInPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Sign in</h1>

        <Link href="/sign/up">Sign up</Link>
      </div>
    </section>
  )
}
