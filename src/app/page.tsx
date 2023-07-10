import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { isRequestError } from '@services/http/error'
import { GetProfileService } from '@services/new-required/GetProfile'

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

async function getProfile() {
  try {
    const profile = await GetProfileService.execute()

    return profile
  } catch (error) {
    if (isRequestError(error) && error.statusCode === 401) {
      redirect('/sign/in')
    } else {
      throw error
    }
  }
}

export default async function HomePage() {
  const profile = await getProfile()

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
            <span>{profile.name}</span>
          </div>

          <i className="ph ph-pencil-simple"></i>
        </Link>

        <Link href="/change/email">
          <i className="ph ph-envelope"></i>

          <div>
            <strong>E-mail address</strong>
            <span>{profile.email}</span>
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
