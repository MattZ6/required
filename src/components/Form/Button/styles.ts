import { styled } from "@styles/stitches.config";

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
    fontWeight: '600',
    letterSpacing: '1px',

    cursor: 'pointer',

    backgroundColor: '$buttonBackground',
    color: '$buttonColor',

    outline: '2px solid transparent',

    transitionAnimation: 'background-color outline-color',

    '&:hover': {
      backgroundColor: '$buttonBackgroundHover',
    },

    '&:focus-visible': {
      backgroundColor: '$buttonBackgroundHover',
      outlineColor: '$buttonBorderHover',
    },
  });
}
