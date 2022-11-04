import { DropdownTrigger } from '@components/Dropdown'

import { styled } from '@styles/stitches.config'

export namespace LanguageSwitcherTriggerStyles {
  export const Trigger = styled(DropdownTrigger, {
    width: 150,
  })

  export const Label = styled('span', {
    flex: 1,

    userSelect: 'none',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  })
}
