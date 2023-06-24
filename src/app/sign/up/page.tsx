import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHeader } from '@components/PageHeader'

import { Form } from './components'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Create account',
  description: "Not have an account yet? You're in the right place",
  twitter: {
    card: 'summary_large_image',
    title: 'Create account',
    description: "Not have an account yet? You're in the right place",
    site: 'https://required.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Create account',
    siteName: 'required',
    description: "Not have an account yet? You're in the right place",
    url: '/sign/up',
  },
}

export default function SignUpPage() {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Create account"
        description="Not have an account yet? You're in the right place"
      />

      <Form />

      <span className={styles.text}>
        Oh wait, <Link href="/sign/in">I already have a account</Link>
      </span>
    </section>
  )
}
