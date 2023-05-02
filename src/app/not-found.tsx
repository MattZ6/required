import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

export default function NotFoundPage() {
  return (
    <section>
      <div className={commonStyles.contentContainer}>
        <h1>four oh four</h1>

        <Link href="/">Back to start</Link>
      </div>
    </section>
  )
}
