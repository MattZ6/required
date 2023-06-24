import type { Metadata } from 'next'

import { PageHeader } from '@components/PageHeader'

import { Form } from './components'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Change name',
  description: 'Change your profile name',
  twitter: {
    card: 'summary_large_image',
    title: 'Change name',
    description: 'Change your profile name',
    site: 'https://required.vercel.app',
  },
  openGraph: {
    type: 'website',
    title: 'Change name',
    siteName: 'required',
    description: 'Change your profile name',
    url: '/change/name',
  },
}

export default function ChangeNamePage() {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Change name"
        description="Change your profile name"
        backLinkURL="/"
      />

      <Form />
    </section>
  )
}
