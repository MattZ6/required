import { styled } from "@styles/stitches.config";

export const Text = styled('p', {
  variants: {
    contrast: {
      hight: {
        color: '$textPrimary'
      },
      low: {
        color: '$textSecondary'
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
  }
});
