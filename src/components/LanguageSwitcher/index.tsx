import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  LanguageSwitcherTrigger as Trigger,
  LanguageSwitcherOptions as Options,
} from './components';

export function LanguageSwitcher() {
  return (
    <DropdownMenu.DropdownMenu>
      <Trigger />

      <Options />
    </DropdownMenu.DropdownMenu>
  );
}
