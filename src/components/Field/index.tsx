import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './styles.module.scss'

type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  name: string
  label?: string
  leadingIcon?: 'envelope-simple' | 'lock-simple'
  error?: FieldError
}

export function Field({ label, leadingIcon, error, ...props }: FieldProps) {
  return (
    <div className={styles.field}>
      {label && <label htmlFor={props.name}>{label}</label>}

      <div className={styles.inputContainer}>
        {leadingIcon && <i className={`ph ph-${leadingIcon}`}></i>}

        <input id={props.name} {...props} />
      </div>

      <div className={styles.errorContainer}>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}
