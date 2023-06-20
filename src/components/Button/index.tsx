import { ButtonHTMLAttributes } from 'react'

import { LoadingSpinner } from '@components/Spinner'

import styles from './styles.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  submiting?: boolean
  trailingIcon?: 'arrow-right'
}

export function Button({ children, trailingIcon, submiting, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {children}
      {!submiting && trailingIcon && (
        <i className={`ph ph-${trailingIcon}`}></i>
      )}
      {submiting && <LoadingSpinner />}
    </button>
  )
}
