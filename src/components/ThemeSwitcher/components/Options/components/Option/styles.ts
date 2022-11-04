import { DropdownItemIndicator, DropdownRadioItem } from '@components/Dropdown'

import { styled } from '@styles/stitches.config'

export namespace ThemeSwitcherOptionStyles {
  export const Option = styled(DropdownRadioItem, {
    paddingLeft: 0,
  })

  export const Text = styled('small', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  })

  export const IndicatorContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    size: '$normal',
  })

  export const SelectionIndicator = styled(DropdownItemIndicator)
}
