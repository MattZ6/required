import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownRadioItem } from '@components/Dropdown';

import { styled } from '@styles/stitches.config';

export namespace LanguageSwitcherOptionSyles {
  export const Option = styled(DropdownRadioItem, {
    // display: 'flex',
    // alignItems: 'center',
    // gap: '$small',

    // borderRadius: '$small',

    // paddingHorizontal: '$smaller',
    // height: '24px',

    // color: '$inputHint',

    // outline: '2px solid transparent',

    // cursor: 'pointer',

    // '&:hover': {
    //   color: '$buttonColor',
    //   backgroundColor: '$buttonBackgroundHover',
    // },

    // '&:focus-visible': {
    //   color: '$buttonColor',
    //   backgroundColor: '$buttonBackgroundHover',
    // },

    // '&[aria-checked="true"]': {
    //   color: '$buttonColor',
    // },
  });

  export const Text = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  });
}
