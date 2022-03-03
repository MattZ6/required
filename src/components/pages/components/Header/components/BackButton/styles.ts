import { styled } from '@styles/stitches.config';

export namespace BackButtonStyles {
  export const Button = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '40px',

    size: '$$size',
    borderRadius: '$$size',

    border: 'none',

    cursor: 'pointer',

    backgroundColor: '$elementBackground',
    color: '$lowContrast',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'background-color, outline-color',

    '> svg': {
      fontSize: '24px',
    },

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
    },

    '&:focus-visible': {
      outlineColor: '$hoveredElementBorder',
      backgroundColor: '$hoveredElementBackground',
    },
  });
}
