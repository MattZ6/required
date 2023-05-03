import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './styles.module.scss'

type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  name: string
  label?: string
  error?: FieldError
}

export function Field({ label, error, ...props }: FieldProps) {
  return (
    <div className={styles.field}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input id={props.name} {...props} />
      <div className={styles.errorContainer}>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}
