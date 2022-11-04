import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@styles/stitches.config'

export const DropdownRadioItem = styled(RadixDropdownMenu.RadioItem, {
  display: 'flex',
  alignItems: 'center',
  gap: '$small',

  borderRadius: '$small',
  height: '$medium',
  paddingHorizontal: '$smaller',

  color: '$lowContrast',

  cursor: 'pointer',

  outlineWidth: 2,
  outlineStyle: 'solid',
  outlineColor: 'transparent',

  transitionAnimation: 'background-color, color',

  '&:hover': {
    backgroundColor: '$hoveredElementBackground',
  },

  '&:focus-visible': {
    backgroundColor: '$activeElementBackground',
  },

  '&[aria-checked="true"]': {
    color: '$highContrast',

    '&:hover': {
      color: '$highContrast',
    },

    '&:focus-visible': {
      color: '$highContrast',
    },
  },
})
