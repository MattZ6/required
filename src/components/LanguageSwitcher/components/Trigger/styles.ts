import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@styles/stitches.config';

export namespace LanguageSwitcherTriggerStyles {
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

    width: 150,
    height: 32,

    textAlign: 'left',
    paddingLeft: '$small',
    paddingRight: '$small',

    cursor: 'pointer',
    color: '$inputHint',

    outline: '2px solid transparent',

    '> svg': {
      fontSize: '$small',
    },
  });

  export const Label = styled('span', {
    flex: 1,

    userSelect: 'none',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  });
}
