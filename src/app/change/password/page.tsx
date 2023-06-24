import type { Metadata } from 'next'

import { PageHeader } from '@components/PageHeader'

import { Form } from './components'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Change password',
  description: 'Enter your current password to make the change',
  twitter: {
    card: 'summary_large_image',
    title: 'Change password',
    description: 'Enter your current password to make the change',
    site: 'https://required.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Change password',
    siteName: 'required',
    description: 'Enter your current password to make the change',
    url: '/change/password',
  },
}

export default function ChangePasswordPage() {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Change password"
        description="Enter your current password to make the change"
        backLinkURL="/"
      />

      <Form />
    </section>
  )
}
