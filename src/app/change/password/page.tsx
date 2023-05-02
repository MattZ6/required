import type { Metadata } from 'next'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Change password',
}

export default function ChangePasswordPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Change password</h1>
      </div>
    </section>
  )
}
