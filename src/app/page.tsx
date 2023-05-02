import type { Metadata } from 'next'
import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Hey user',
}

export default function HomePage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Hey user</h1>

        <nav>
          <Link href="/change/name">Change name</Link>
          <Link href="/change/email">Change email address</Link>
          <Link href="/change/password">Change password</Link>
        </nav>
      </div>
    </section>
  )
}
