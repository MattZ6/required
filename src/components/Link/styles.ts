import { styled } from '@styles/stitches.config';

export namespace LinkStyles {
  export const Link = styled('a', {
    color: '$link',

    paddingHorizontal: '$smaller',
    borderRadius: '$small',

    textDecoration: 'none',

    transitionAnimation: 'color background-color outline-color',

    outline: '2px solid transparent',

    '&:hover': {
      backgroundColor: '$buttonBackground',
      color: '$linkHover',
    },

    '&:focus-visible': {
      color: '$linkHover',
      outlineColor: '$linkOutline',
      backgroundColor: '$buttonBackground',
    },
  });
}
