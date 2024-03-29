import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHeader } from '@components/PageHeader'

import { Form } from './components'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to continue to your profile page',
  twitter: {
    card: 'summary_large_image',
    title: 'Login',
    description: 'Sign in to continue to your profile page',
    site: 'https://required.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Login',
    siteName: 'required',
    description: 'Sign in to continue to your profile page',
    url: '/sign/in',
  },
}

export default function SignInPage() {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Login"
        description="Sign in to continue to your profile page"
      />

      <Form />

      <span className={styles.text}>
        Don&apos;t have an account yet?{' '}
        <Link href="/sign/up">Create account right now</Link>
      </span>
    </section>
  )
}
