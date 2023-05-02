import type { Metadata } from 'next'
import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Sign up',
}

export default function SignUpPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Sign up</h1>

        <Link href="/sign/in">Sign in</Link>
      </div>
    </section>
  )
}
