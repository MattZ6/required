import { styled } from '@styles/stitches.config'

export const Text = styled('p', {
  variants: {
    contrast: {
      high: {
        color: '$highContrast',
      },
      low: {
        color: '$lowContrast',
      },
    },
    size: {
      small: {
        fontSize: '$normal',
        lineHeight: '$normal',
      },
      normal: {
        fontSize: '$medium',
        lineHeight: '$medium',
      },
    },
  },
  defaultVariants: {
    contrast: 'low',
    size: 'normal',
  },
})
