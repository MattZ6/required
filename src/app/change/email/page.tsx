import type { Metadata } from 'next'

import { PageHeader } from '@components/PageHeader'

import { Form } from './components'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Change e-mail address',
  description:
    'Change your e-mail address (for future access and communication messages)',
  twitter: {
    card: 'summary_large_image',
    title: 'Change e-mail address',
    description:
      'Change your e-mail address (for future access and communication messages)',
    site: 'https://required.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Change e-mail address',
    siteName: 'required',
    description:
      'Change your e-mail address (for future access and communication messages)',
    url: '/change/email',
  },
}

export default function ChangeEmailPage() {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Change e-mail address"
        description="Change your e-mail address (for future access and communication messages)"
        backLinkURL="/"
      />

      <Form />
    </section>
  )
}
