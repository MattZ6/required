import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Created by
        <Link href="https://github.com/mattz6" target="_blank">
          <Image
            src="/assets/imgs/profile-picture.jpg"
            alt=""
            width={20}
            height={20}
          />
          Matheus Zanin
        </Link>
      </span>
    </footer>
  )
}
