import { ReactNode } from 'react'

import styles from './styles.module.scss'

type Props = {
  children: ReactNode
}

export function ContentContainer(props: Props) {
  return <div className={styles.container} {...props} />
}
