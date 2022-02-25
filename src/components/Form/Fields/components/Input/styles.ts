import { styled } from "@styles/stitches.config";

export namespace FormFieldInputStyles {
  export const Input = styled('input', {
    flex: 1,

    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$textPrimary',

    caretColor: '$primary',

    backgroundColor: '$inputBackground',

    outlineColor: 'transparent',
    outlineWidth: 0,

    paddingHorizontal: '$normal',
    paddingTop: '$medium',
    paddingBottom: '$small',

    border: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: '2px',
    borderBottomColor: '$inputBorder',
    upperBorderRadius: '$normal',

    transitionAnimation: 'background-color border-color',

    '&::placeholder': {
      userSelect: 'none',
      color: '$textSecondary',
    },

    '&:hover': {
      borderColor: '$inputBorderHover',
    },

    '&:focus': {
      backgroundColor: '$inputBackgroundFocus',
      borderColor: '$primary',
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
