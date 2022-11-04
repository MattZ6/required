import { forwardRef, ForwardRefRenderFunction } from 'react'
import { IconType } from 'react-icons'

import {
  FormFieldLabel as Label,
  FormFieldInput as Input,
  FormFieldError as Error,
  FormFieldIcon as Icon,
} from './components'
import { FormFieldStyles as Styles } from './styles'
import { BaseProps } from './types'

type Props = BaseProps & {
  icon?: IconType
}

const PrimitiveFormField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, icon, error, ...props },
  ref,
) => (
  <Styles.Container>
    <Styles.Field
      disabled={props.disabled}
      aria-disabled={props.disabled}
      invalid={!props.disabled && !!error}
    >
      <Input
        ref={ref}
        label={label}
        withTrailing={!!icon}
        aria-invalid={!props.disabled && !!error}
        {...props}
      />

      <Label label={label} />

      <Icon icon={icon} />
    </Styles.Field>

    <Error error={error} />
  </Styles.Container>
)

export const FormField = forwardRef(PrimitiveFormField)
