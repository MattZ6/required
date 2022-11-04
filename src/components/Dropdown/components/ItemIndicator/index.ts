import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@styles/stitches.config'

export const DropdownItemIndicator = styled(RadixDropdownMenu.ItemIndicator, {
  $$size: '6px',

  size: '$$size',
  borderRadius: '$$size',

  backgroundColor: '$highContrast',
})
