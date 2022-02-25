import { styled } from "@styles/stitches.config";

export namespace PasswordFormFieldVisibilityToggleButtonStyles {
  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    width: 36,
    height: 36,
    borderRadius: 36,

    border: 'none',
    backgroundColor: 'transparent',

    cursor: 'pointer',

    transitionAnimation: 'background-color',

    '&:hover': {
      backgroundColor: '$inputBackground',
    },

    '> svg': {
      fontSize: '24px',

      transitionAnimation: 'color',
    }
  });
}
