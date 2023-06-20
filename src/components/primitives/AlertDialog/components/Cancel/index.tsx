import { Cancel, AlertDialogCancelProps } from '@radix-ui/react-alert-dialog'

import styles from './styles.module.scss'

export function AlertDialogCancel(props: AlertDialogCancelProps) {
  return <Cancel className={styles.button} {...props} />
}
