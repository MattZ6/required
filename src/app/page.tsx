import type { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Hey user',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
    indexifembedded: false,
  },
}

export default function HomePage() {
  return (
    <section className={styles.page}>
      <header>
        <span>Hello, User</span>
        <h1>My profile</h1>
      </header>

      <nav>
        <Link href="/change/name">
          <i className="ph ph-smiley"></i>

          <div>
            <strong>Name</strong>
            <span>John Doe</span>
          </div>

          <i className="ph ph-pencil-simple"></i>
        </Link>

        <Link href="/change/email">
          <i className="ph ph-envelope"></i>

          <div>
            <strong>E-mail address</strong>
            <span>john.doe@example.com</span>
          </div>

          <i className="ph ph-pencil-simple"></i>
        </Link>

        <Link href="/change/password">
          <i className="ph ph-key"></i>

          <div>
            <strong>Password</strong>
            <span>Change my password</span>
          </div>

          <i className="ph ph-pencil-simple"></i>
        </Link>
      </nav>
    </section>
  )
}
