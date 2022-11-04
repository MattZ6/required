import { Dropdown } from '@components/Dropdown'

import {
  LanguageSwitcherTrigger as Trigger,
  LanguageSwitcherOptions as Options,
} from './components'

export function LanguageSwitcher() {
  return (
    <Dropdown>
      <Trigger />

      <Options />
    </Dropdown>
  )
}
