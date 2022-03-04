import { DropdownRadioItem } from '@components/Dropdown';

import { styled } from '@styles/stitches.config';

export namespace LanguageSwitcherOptionSyles {
  export const Option = styled(DropdownRadioItem);

  export const Text = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  });
}
