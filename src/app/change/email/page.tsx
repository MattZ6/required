import type { Metadata } from 'next'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Change email address',
}

export default function ChangeEmailPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Change email address</h1>
      </div>
    </section>
  )
}
