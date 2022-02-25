import { styled } from '@styles/stitches.config';

export namespace GithubRepositoryLinkStyles {
  export const Link = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 36,
    height: 36,
    borderRadius: 36,

    backgroundColor: '$backgroundLight',
    color: '$textSecondary',

    transitionAnimation: 'color, background-color',

    '&:hover': {
      backgroundColor: '$inputBackgroundFocus',
      color: '$textPrimary',
    },

    '> svg': {
      fontSize: '24px',
    },
  });
}
