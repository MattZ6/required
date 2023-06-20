import {
  Description,
  DialogDescriptionProps,
} from '@radix-ui/react-alert-dialog'

import styles from './styles.module.scss'

export function AlertDialogDescription(props: DialogDescriptionProps) {
  return <Description className={styles.description} {...props} />
}
