import '@styles/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
