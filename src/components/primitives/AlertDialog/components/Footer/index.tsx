import { HTMLProps } from 'react'

import styles from './styles.module.scss'

type Props = HTMLProps<HTMLDivElement>

export function DialogFooter(props: Props) {
  return <footer className={styles.footer} {...props} />
}
