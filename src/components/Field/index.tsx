import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import { FieldError } from 'react-hook-form'

import styles from './styles.module.scss'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  name: string
  label?: string
  leadingIcon?: 'smiley' | 'envelope' | 'lock'
  error?: FieldError
}

const BaseField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, leadingIcon, error, ...props },
  ref,
) => (
  <div className={`${styles.field} ${error ? styles.withError : ''}`}>
    {label && <label htmlFor={props.name}>{label}</label>}

    <div className={styles.inputContainer}>
      {leadingIcon && <i className={`ph ph-${leadingIcon}`}></i>}

      <input ref={ref} id={props.name} {...props} />
    </div>

    <div className={styles.errorContainer}>
      {error && <span>{error.message}</span>}
    </div>
  </div>
)

export const Field = forwardRef(BaseField)
