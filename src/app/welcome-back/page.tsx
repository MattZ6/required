import type { Metadata } from 'next'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Welcome back user',
}

export default function WelcomeBackPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Welcome back user</h1>
      </div>
    </section>
  )
}
