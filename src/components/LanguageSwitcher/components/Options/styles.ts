import { DropdownContent, DropdownRadioGroup } from '@components/Dropdown'

import { styled } from '@styles/stitches.config'

export namespace LanguageSwitcherOptionsStyles {
  export const Container = styled(DropdownContent, {
    minWidth: 150,
  })

  export const RadioGroup = styled(DropdownRadioGroup)
}
