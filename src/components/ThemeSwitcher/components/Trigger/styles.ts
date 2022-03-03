import { styled } from '@styles/stitches.config';

import { DropdownTrigger } from '@components/Dropdown';

export namespace ThemeSwitcherTriggerStyles {
  export const Trigger = styled(DropdownTrigger, {
    '> span': {
      flex: 1,

      userSelect: 'none',
    },
  });
}
