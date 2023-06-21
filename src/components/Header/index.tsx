import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

import { Links } from './components'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={commonStyles.contentContainer}>
        <strong>✳️ required</strong>

        <nav>
          <Links />

          <span />

          <Link
            className={styles.button}
            href="https://github.com/MattZ6/required"
            target="_blank"
          >
            <i className="ph ph-github-logo"></i>
          </Link>
        </nav>
      </div>
    </header>
  )
}
