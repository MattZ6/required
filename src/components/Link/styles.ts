import { styled } from '@styles/stitches.config'

export namespace LinkStyles {
  export const Link = styled('a', {
    color: '$highContrast',

    paddingHorizontal: '$smaller',
    borderRadius: '$small',

    textDecoration: 'underline',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    textUnderlinePosition: 'under',
    textDecorationThickness: 1,

    transitionAnimation: 'color, background-color, outline-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$hoveredElementBackground',
      outlineColor: '$hoveredElementBorder',
    },
  })
}
