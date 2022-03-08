import { styled } from '@styles/stitches.config';

export namespace FormButtonStyles {
  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: '100px',
    height: '42px',

    paddingHorizontal: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: 'bold',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: '$primaryElementBackground',
    color: '$primarySolid',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'color, background-color, outline-color',

    '&:hover': {
      backgroundColor: '$primaryHoveredElementBackground',
      color: '$primarySolid',
    },

    '&:focus-visible': {
      backgroundColor: '$primaryHoveredElementBackground',
      color: '$primaryHoveredSolid',
      outlineColor: '$primaryHoveredElementBorder',
    },

    variants: {
      clear: {
        true: {
          backgroundColor: 'transparent',
        },
      },
      color: {
        danger: {
          color: '$dangerSolid',
        },
      },
    },

    defaultVariants: {
      clear: false,
    },
  });
}
