import { Overlay, DialogOverlayProps } from '@radix-ui/react-alert-dialog'

import styles from './styles.module.scss'

export function AlertDialogOverlay(props: DialogOverlayProps) {
  return <Overlay className={styles.container} {...props} />
}
