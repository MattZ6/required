import { styled } from '@styles/stitches.config'

export namespace PropertyLinkStyles {
  export const Button = styled('a', {
    display: 'flex',
    alignItems: 'center',
    gap: '$normal',

    paddingVertical: '$small',
    paddingHorizontal: '$normal',

    borderRadius: '$normal',

    backgroundColor: '$elementBackground',

    cursor: 'pointer',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    textDecoration: 'none',

    transitionAnimation: 'background-color, outline-color',

    '&:hover': {
      backgroundColor: '$hoveredElementBackground',
    },

    '&:focus': {
      backgroundColor: '$hoveredElementBackground',
      outlineColor: '$hoveredElementBorder',
    },

    '> svg': {
      fontSize: '$medium',
      color: '$lowContrast',

      '&:first-child': {
        fontSize: '22px',
      },
    },
  })

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  })

  export const Label = styled('small', {
    fontSize: '$small',

    color: '$lowContrast',
  })

  export const Text = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$highContrast',
  })
}
