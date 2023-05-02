import '@styles/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Auth Flow',
    template: '%s //  Auth Flow',
  },
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
