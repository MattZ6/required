import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled, keyframes } from '@styles/stitches.config'

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const DropdownContent = styled(RadixDropdownMenu.Content, {
  padding: '$small',

  backgroundColor: '$appBackground',

  borderRadius: '$normal',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$elementBorder',

  animationDuration: '150ms',
  animationTimingFunction: 'ease-out',

  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
})
