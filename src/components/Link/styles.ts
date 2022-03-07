import { styled } from '@styles/stitches.config';

export namespace LinkStyles {
  export const Link = styled('a', {
    color: '$primarySolid',

    paddingHorizontal: '$smaller',
    borderRadius: '$small',

    textDecoration: 'underline',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'color, background-color, outline-color',

    '&:hover': {
      backgroundColor: '$primaryHoveredElementBackground',
      color: '$primaryHoveredSolid',
    },

    '&:focus-visible': {
      backgroundColor: '$primaryHoveredElementBackground',
      color: '$primaryHoveredSolid',
      outlineColor: '$primaryElementBorder',
    },
  });
}
