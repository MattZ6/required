import type { Metadata } from 'next'

import commonStyles from '@styles/common.module.scss'

export const metadata: Metadata = {
  title: 'Change name',
}

export default function ChangeNamePage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>Change name</h1>
      </div>
    </section>
  )
}
