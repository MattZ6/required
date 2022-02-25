import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled, keyframes } from '@styles/stitches.config';

export namespace ThemeSwitcherOptionsStyles {
  const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  export const Container = styled(DropdownMenu.Content, {
    width: 120,

    padding: '$small',

    borderRadius: '$normal',
    border: '1px solid $inputBorder',
    backgroundColor: '$background',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
  });

  export const List = styled(DropdownMenu.RadioGroup, {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',

    borderRadius: 'inherit',
  });
}
