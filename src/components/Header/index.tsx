import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={commonStyles.contentContainer}>
        <strong>🛡️ AuthFlow</strong>

        {/* @todo - change routes based on user's authentication */}

        <nav>
          <Link href="/sign/in">Login</Link>
          <Link href="/sign/up">Create account</Link>
        </nav>
      </div>
    </header>
  )
}
