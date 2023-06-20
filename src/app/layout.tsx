import '@styles/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { About } from '@components/About'
import { AlertDialogHandler } from '@components/AlertDialogHandler'
import { ContentContainer } from '@components/ContentContainer'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'required',
    template: '%s //  required',
  },
  authors: {
    name: 'Matheus Felipe Zanin',
    url: 'https://github.com/MattZ6',
  },
  creator: 'Matheus Felipe Zanin',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <html>
        <body className={inter.className}>
          <Header />

          <main className={styles.main}>
            <ContentContainer>
              {children}

              <About />
            </ContentContainer>
          </main>

          <Footer />
        </body>
      </html>

      <AlertDialogHandler />
    </>
  )
}
