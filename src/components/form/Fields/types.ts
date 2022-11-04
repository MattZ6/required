import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export type BaseProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  error?: FieldError
}
