import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@styles/stitches.config';

export namespace LanguageSwitcherOptionSyles {
  export const Option = styled(DropdownMenu.RadioItem, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    borderRadius: '$small',

    paddingHorizontal: '$smaller',
    height: '24px',

    color: '$inputHint',

    outline: '2px solid transparent',

    cursor: 'pointer',

    '&:hover': {
      color: '$buttonColor',
      backgroundColor: '$buttonBackgroundHover',
    },

    '&:focus-visible': {
      color: '$buttonColor',
      backgroundColor: '$buttonBackgroundHover',
    },

    '&[aria-checked="true"]': {
      color: '$buttonColor',
    },
  });

  export const Flag = styled('div', {
    width: 22,
    height: 16.5,
    borderRadius: '$small',

    backgroundColor: '$backgroundLight',
  });

  export const Text = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  });
}
