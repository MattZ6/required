import { styled } from '@styles/stitches.config';

export namespace BackButtonStyles {
  export const Button = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '40px',
    height: '40px',
    borderRadius: '40px',

    border: 'none',

    cursor: 'pointer',

    backgroundColor: '$inputBackground',

    color: '$textSecondary',

    outline: '2px solid transparent',

    transitionAnimation: 'background-color outline-color',

    '> svg': {
      fontSize: '24px',
    },

    '&:hover': {
      backgroundColor: '$inputBackgroundFocus',
    },

    '&:focus-visible': {
      outlineColor: '$primary',
      backgroundColor: '$inputBackgroundFocus',
    },
  });
}
