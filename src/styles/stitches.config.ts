import {
  mauve,
  mauveDark,
  violet,
  violetDark,
  red,
  redDark,
} from '@radix-ui/colors';

import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      background: mauve.mauve1,
      backgroundLight: mauve.mauve2,

      componentsBackground: mauve.mauve3,

      textPrimary: mauve.mauve12,
      textSecondary: mauve.mauve11,

      link: violet.violet9,
      linkHover: violet.violet10,
      linkOutline: violet.violet7,

      inputBackground: mauve.mauve3,
      inputBackgroundFocus: mauve.mauve4,
      inputBorder: mauve.mauve7,
      inputBorderHover: mauve.mauve8,
      inputHint: '$textSecondary',

      buttonBackground: violet.violet4,
      buttonBackgroundHover: violet.violet5,
      buttonColor: violet.violet11,
      buttonBorder: violet.violet7,
      buttonBorderHover: violet.violet8,

      danger: red.red10,

      primary: violet.violet9,
    },
    space: {
      smaller: '4px',
      small: '8px',
      normal: '16px',
      medium: '24px',
    },
    sizes: {
      normal: '16px',
      medium: '24px',
    },
    fontSizes: {
      small: '12px',
      normal: '14px',
      medium: '16px',
    },
    lineHeights: {
      small: '20px',
      normal: '24px',
      medium: '$normal',
    },
    radii: {
      small: '4px',
      normal: '8px',
    },
    fonts: {
      default: '"Nunito", sans-serif',
    },
    transitions: {
      default: '150ms',
    },
  },
  utils: {
    marginHorizontal: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingHorizontal: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingVertical: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    upperBorderRadius: (value: string | number) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    }),
    transitionAnimation: (property: string) => ({
      transitionDuration: '$transitions$default',
      transitionTimingFunction: 'ease-out',
      transitionProperty: property,
    }),
  },
  media: {
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    background: mauveDark.mauve1,
    backgroundLight: mauveDark.mauve2,

    componentsBackground: mauveDark.mauve3,

    link: violetDark.violet9,
    linkHover: violetDark.violet10,
    linkOutline: violetDark.violet7,

    textPrimary: mauveDark.mauve12,
    textSecondary: mauveDark.mauve11,

    inputBackground: mauveDark.mauve2,
    inputBackgroundFocus: mauveDark.mauve4,
    inputBorder: mauveDark.mauve7,
    inputBorderHover: mauveDark.mauve8,

    buttonBackground: violetDark.violet4,
    buttonBackgroundHover: violetDark.violet5,
    buttonColor: violetDark.violet11,
    buttonBorder: violetDark.violet7,
    buttonBorderHover: violetDark.violet8,

    danger: redDark.red10,

    primary: violetDark.violet9,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    backgroundColor: '$background',
    color: '$textPrimary',

    fontFamily: '$default',
  }
});
