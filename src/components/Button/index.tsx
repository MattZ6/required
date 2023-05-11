import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  trailingIcon?: 'arrow-right'
}

export function Button({ children, trailingIcon, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {children}
      {trailingIcon && <i className={`ph ph-${trailingIcon}`}></i>}
    </button>
  )
}
