import { DropdownContent, DropdownRadioGroup } from '@components/Dropdown';

import { styled } from '@styles/stitches.config';

export namespace ThemeSwitcherOptionsStyles {
  export const Container = styled(DropdownContent, {
    width: 120,
  });

  export const RadioGroup = styled(DropdownRadioGroup);
}
