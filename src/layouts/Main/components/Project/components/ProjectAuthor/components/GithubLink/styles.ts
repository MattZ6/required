import { styled } from '@styles/stitches.config';

export namespace ProjectAuthorGithubLinkStyles {
  export const Button = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '40px',

    size: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$elementBackground',

    color: '$highContrast',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'background-color, outline-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$hoveredElementBackground',
      outlineColor: '$hoveredElementBorder',
    },

    '> svg': {
      fontSize: '20px',
    },
  });
}
