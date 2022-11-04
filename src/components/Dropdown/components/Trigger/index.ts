import * as RadixDropdown from '@radix-ui/react-dropdown-menu'

import { styled } from '@styles/stitches.config'

export const DropdownTrigger = styled(RadixDropdown.Trigger, {
  display: 'flex',
  alignItems: 'center',
  gap: '$small',

  fontSize: '$small',
  lineHeight: '$small',
  textAlign: 'left',

  borderRadius: '$normal',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$elementBorder',

  background: 'transparent',

  minWidth: 120,
  minHeight: 32,

  paddingHorizontal: '$small',

  cursor: 'pointer',
  color: '$lowContrast',

  outlineWidth: 2,
  outlineStyle: 'solid',
  outlineColor: 'transparent',

  userSelect: 'none',

  transitionAnimation: 'border-color, outline-color',

  '&:hover': {
    borderColor: '$hoveredElementBorder',
  },

  '&:focus': {
    outlineColor: '$hoveredElementBorder',
  },
})
