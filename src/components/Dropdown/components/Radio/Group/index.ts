import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@styles/stitches.config'

export const DropdownRadioGroup = styled(RadixDropdownMenu.RadioGroup, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$smallest',

  borderRadius: 'inherit',
})
