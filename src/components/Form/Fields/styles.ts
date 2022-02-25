import { styled, css } from "@styles/stitches.config";

export namespace FormFieldStyles {
  const undergoLabelStyle = css({
    fontSize: '$small',
    lineHeight: '$small',

    top: '4px',
  });

  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });

  export const Field = styled('label', {
    display: 'flex',
    alignItems: 'center',

    position: 'relative',

    transitionAnimation: 'opacity',

    '> small': {
      color: '$inputHint',

      fontSize: '$normal',
      lineHeight: '$normal',

      top: '17px',

      transitionAnimation: 'color, top, font-size, line-height',
    },

    '> input': {
      '&::placeholder': {
        opacity: '0',

        transitionAnimation: 'opacity',
      },
    },

    '> input:not(:placeholder-shown) + small': {
      fontSize: '$small',
      lineHeight: '$small',

      top: '4px',
    },

    'svg': {
      color: '$inputHint',
      transitionAnimation: 'color',
    },

    '&:focus-within': {
      '> small': {
        fontSize: '$small',
        lineHeight: '$small',

        top: '4px',

        color: '$primary',
      },

      '> input': {
        backgroundColor: '$inputBackgroundFocus',
        borderColor: '$primary',

        '&::placeholder': {
          opacity: '1',
        },
      },

      'svg': {
        color: '$primary',
      },
    },

    variants: {
      disabled: {
        true: {
          opacity: 0.5,
        },
      },

      invalid: {
        true: {
          '> small': {
            color: '$danger',
          },

          '> input': {
            borderColor: '$danger',

            '&:hover:not(:focus)': {
              borderColor: '$danger',
            },
          },

          'svg': {
            color: '$danger',
          },
        },
      },
    },
  });
}
