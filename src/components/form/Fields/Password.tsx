import { forwardRef, ForwardRefRenderFunction, useState } from 'react'

import {
  FormFieldLabel as Label,
  FormFieldInput as Input,
  FormFieldError as Error,
  PasswordFormFieldVisibilityToggleButton as ToggleButton,
} from './components'
import { FormFieldStyles as Styles } from './styles'
import { BaseProps } from './types'

type Props = Omit<BaseProps, 'type'>

const PrimitiveFormField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, error, ...props },
  ref,
) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Styles.Container>
      <Styles.Field
        disabled={props.disabled}
        aria-disabled={props.disabled}
        invalid={!props.disabled && !!error}
      >
        <Input
          ref={ref}
          label={label}
          aria-invalid={!props.disabled && !!error}
          withTrailing
          {...props}
          type={isVisible && !props.disabled ? 'text' : 'password'}
        />

        <Label label={label} />

        <ToggleButton
          disabled={props.disabled}
          isVisible={isVisible && !props.disabled}
          onToggle={() => setIsVisible((state) => !state)}
        />
      </Styles.Field>

      <Error error={error} />
    </Styles.Container>
  )
}

export const PasswordFormField = forwardRef(PrimitiveFormField)
