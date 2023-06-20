import { Content, DialogContentProps } from '@radix-ui/react-alert-dialog'

import styles from './styles.module.scss'

export function AlertDialogContent(props: DialogContentProps) {
  return <Content className={styles.container} {...props} />
}
