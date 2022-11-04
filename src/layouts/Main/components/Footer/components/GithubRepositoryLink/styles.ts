import { styled } from '@styles/stitches.config'

export namespace GithubRepositoryLinkStyles {
  export const Link = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '36px',

    size: '$$size',
    borderRadius: '$$size',

    backgroundColor: 'transparent',
    color: '$lowContrast',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionAnimation: 'color, background-color, outline-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
      color: '$highContrast',
    },

    '&:focus-visible': {
      backgroundColor: '$hoveredElementBackground',
      color: '$highContrast',
      outlineColor: '$hoveredElementBorder',
    },

    '> svg': {
      fontSize: '24px',
    },
  })
}
