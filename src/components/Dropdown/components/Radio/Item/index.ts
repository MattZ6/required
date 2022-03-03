import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@styles/stitches.config';

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
    color: '$primaryHoveredSolid',
    backgroundColor: '$primaryHoveredElementBackground',
  },

  '&:focus-visible': {
    color: '$primaryHoveredSolid',
    backgroundColor: '$primaryHoveredElementBackground',
  },

  '&[aria-checked="true"]': {
    color: '$primarySolid',

    '&:hover': {
      color: '$primaryHoveredSolid',
    },

    '&:focus-visible': {
      color: '$primaryHoveredSolid',
    },
  },
});
