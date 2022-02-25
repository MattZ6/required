import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  ThemeSwitcherTrigger as Trigger,
  ThemeSwitcherOptions as Options,
} from './components';

export function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <DropdownMenu.DropdownMenu>
      <Trigger />

      <Options />
    </DropdownMenu.DropdownMenu>
  );
}
