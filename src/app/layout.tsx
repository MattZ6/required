import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
