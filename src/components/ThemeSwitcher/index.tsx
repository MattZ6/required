import { useEffect, useState } from 'react'

import { Dropdown } from '@components/Dropdown'

import {
  ThemeSwitcherTrigger as Trigger,
  ThemeSwitcherOptions as Options,
} from './components'

export function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return null
  }

  return (
    <Dropdown>
      <Trigger />

      <Options />
    </Dropdown>
  )
}
