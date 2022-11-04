import { styled } from '@styles/stitches.config'

export namespace FormButtonStyles {
  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

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

    backgroundColor: '$elementBackground',
    color: '$highContrast',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'color, background-color, outline-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$hoveredElementBackground',
      outlineColor: '$hoveredElementBorder',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '$elementBackground',
      color: '$lowContrast',
    },

    variants: {
      showLoading: {
        true: {
          color: 'transparent !important',
          cursor: 'wait !important',
        },
      },
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
      showLoading: false,
    },
  })

  export const LoadingContainer = styled('div', {
    position: 'absolute',
    height: '24px',
  })
}
