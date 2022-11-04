import { ButtonHTMLAttributes } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

import { FormFieldSlot as Slot } from '../Slot'
import { PasswordFormFieldVisibilityToggleButtonStyles as Styles } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isVisible: boolean
  onToggle: () => void
}

export function PasswordFormFieldVisibilityToggleButton({
  isVisible,
  onToggle,
  ...props
}: Props) {
  return (
    <Slot side="right" trailingButton>
      <Styles.Button
        {...props}
        tabIndex={-1}
        type="button"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        onClick={() => onToggle()}
      >
        {isVisible ? (
          <MdOutlineVisibilityOff aria-hidden />
        ) : (
          <MdOutlineVisibility aria-hidden />
        )}
      </Styles.Button>
    </Slot>
  )
}
