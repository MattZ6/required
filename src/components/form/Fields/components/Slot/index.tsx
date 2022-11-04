import { VariantProps } from '@stitches/react'
import { ReactElement } from 'react'

import { FormFieldSlotStyles as Styles } from './styles'

type Props = VariantProps<typeof Styles.Slot> & {
  children: ReactElement
}

export function FormFieldSlot({ children, ...props }: Props) {
  return <Styles.Slot {...props}>{children}</Styles.Slot>
}
