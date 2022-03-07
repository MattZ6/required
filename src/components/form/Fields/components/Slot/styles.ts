import { styled } from '@styles/stitches.config';

export namespace FormFieldSlotStyles {
  export const Slot = styled('div', {
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
      unclickable: {
        true: {
          userSelect: 'none',
          pointerEvents: 'none',
        },
      },

      side: {
        right: {
          right: '$normal',
        },
      },

      trailingButton: {
        true: {
          marginRight: '-$small',
        },
      },
    },
  });
}
