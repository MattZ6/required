import Link from 'next/link'

import commonStyles from '@styles/common.module.scss'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={commonStyles.contentContainer}>
        <strong>✳️ required</strong>

        {/* @todo - change routes based on user's authentication */}

        <nav>
          <Link className={styles.link} href="/sign/in">
            Login
          </Link>
          <Link className={styles.link} href="/sign/up">
            Create account
          </Link>

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
