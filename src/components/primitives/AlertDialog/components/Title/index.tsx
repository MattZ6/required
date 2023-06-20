import { Title, DialogTitleProps } from '@radix-ui/react-alert-dialog'

import styles from './styles.module.scss'

export function AlertDialogTitle(props: DialogTitleProps) {
  return <Title className={styles.title} {...props} />
}
