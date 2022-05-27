import { styled } from '@styles/stitches.config';

export namespace PasswordFormFieldVisibilityToggleButtonStyles {
  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    $$size: '36px',

    size: '$$size',
    borderRadius: '$$size',

    border: 'none',
    backgroundColor: 'transparent',

    cursor: 'pointer',

    transitionAnimation: 'color, background-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',

      '> svg': {
        color: '$hoveredSolid',
      },
    },

    '&:disabled': {
      backgroundColor: 'transparent',
      cursor: 'not-allowed',

      '> svg': {
        color: '$solid',
      },
    },

    '> svg': {
      fontSize: '24px',

      transitionAnimation: 'color',
    },
  });
}
