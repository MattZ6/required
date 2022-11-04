import { DropdownTrigger } from '@components/Dropdown'

import { styled } from '@styles/stitches.config'

export namespace ThemeSwitcherTriggerStyles {
  export const Trigger = styled(DropdownTrigger, {
    '> span': {
      flex: 1,

      userSelect: 'none',
    },
  })
}
