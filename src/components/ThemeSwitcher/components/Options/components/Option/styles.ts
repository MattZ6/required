import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from "@styles/stitches.config";

export namespace ThemeSwitcherOptionStyles {
  export const Option = styled(DropdownMenu.RadioItem, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    borderRadius: '$small',

    height: '$medium',

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

  export const Text = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  });

  export const IndicatorContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '16px',
    height: '16px',
  });

  export const SelectionIndicator = styled(DropdownMenu.ItemIndicator, {
    width: '6px',
    height: '6px',
    borderRadius: '6px',
    backgroundColor: '$primary',
  });
}
