import { styled } from '@styles/stitches.config';

export namespace FormFieldStyles {
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
      color: '$lowContrast',

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

    svg: {
      color: '$lowContrast',
      transitionAnimation: 'color',
    },

    '&:focus-within': {
      '> small': {
        fontSize: '$small',
        lineHeight: '$small',

        top: '4px',

        color: '$primarySolid',
      },

      '> input': {
        borderColor: '$primaryHoveredElementBorder',

        '&::placeholder': {
          opacity: '1',
        },
      },

      svg: {
        color: '$primarySolid',
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
            color: '$dangerSolid',
          },

          '> input': {
            borderColor: '$dangerSolid',

            '&:hover:not(:focus)': {
              borderColor: '$dangerSolid',
            },
          },

          svg: {
            color: '$dangerSolid',
          },
        },
      },
    },
  });
}
