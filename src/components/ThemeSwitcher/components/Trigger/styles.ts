import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@styles/stitches.config';

export namespace ThemeSwitcherTriggerStyles {
  export const Trigger = styled(DropdownMenu.Trigger, {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',

    fontSize: '$small',
    lineHeight: '$small',
    textTransform: 'capitalize',

    borderRadius: '$normal',
    border: '1px solid $inputBorder',

    background: 'transparent',

    width: 120,
    height: 32,

    textAlign: 'left',
    paddingLeft: '12px',
    paddingRight: '$small',

    cursor: 'pointer',
    color: '$inputHint',

    outline: '2px solid transparent',

    '> svg': {
      fontSize: '$small',
    },

    '> span': {
      flex: 1,

      userSelect: 'none',
    },

    '&:hover': {
      backgroundColor: '$inputBackground',
      borderColor: '$inputBorderHover',
    },

    '&:focus-visible': {
      outlineColor: '$primary',
    },
  });
}
