import { styled } from '@styles/stitches.config';

export namespace FormFieldInputStyles {
  export const Input = styled('input', {
    flex: 1,

    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$highContrast',

    caretColor: '$primarySolid',

    backgroundColor: '$elementBackground',

    outlineColor: 'transparent',
    outlineWidth: 0,

    paddingHorizontal: '$normal',
    paddingTop: '$medium',
    paddingBottom: '$small',

    border: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    borderBottomColor: '$elementBorder',
    upperBorderRadius: '$normal',

    transitionAnimation: 'background-color, border-color',

    '&::placeholder': {
      userSelect: 'none',
      color: '$lowContrast',
    },

    '&:hover': {
      borderColor: '$hoveredElementBorder',
    },

    '&:focus': {
      borderColor: '$primaryHoveredElementBorder',
    },

    '&:disabled': {
      borderColor: '$inputBorder',

      cursor: 'not-allowed',
    },

    variants: {
      withTrailing: {
        true: {
          paddingRight: 'calc($normal + $medium + $normal)',
        },
      },
    },
  });
}
