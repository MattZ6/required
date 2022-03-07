import {
  mauve,
  mauveDark,
  violet,
  violetDark,
  red,
  redDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

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
      /** Danger solid */

      dangerSolid: red.red10,

      /** Backgrounds */

      appBackground: mauve.mauve1,
      subtleBackground: mauve.mauve2,

      /** Elements */

      elementBackground: mauve.mauve3,
      hoveredElementBackground: mauve.mauve4,
      activeElementBackground: mauve.mauve5,

      /** Separators */

      divider: mauve.mauve6,

      /** Borders */

      elementBorder: mauve.mauve7,
      hoveredElementBorder: mauve.mauve8,

      /** Main color */

      solid: mauve.mauve9,
      hoveredSolid: mauve.mauve10,

      /** Texts */

      lowContrast: mauve.mauve11,
      highContrast: mauve.mauve12,

      /** Primary backgrounds */

      primaryAppBackground: violet.violet1,
      primarySubtleBackground: violet.violet2,

      /** Primary elements */

      primaryElementBackground: violet.violet3,
      primaryHoveredElementBackground: violet.violet4,
      primaryActiveElementBackground: violet.violet5,

      /** Primary separators */

      primaryDivider: violet.violet6,

      /** Primary borders */

      primaryElementBorder: violet.violet7,
      primaryHoveredElementBorder: violet.violet8,

      /** Primary main color */

      primarySolid: violet.violet9,
      primaryHoveredSolid: violet.violet10,

      /** Primary texts */

      primaryLowContrast: violet.violet11,
      primaryHighContrast: violet.violet12,
    },
    space: {
      smallest: '2px',
      smaller: '4px',
      small: '8px',
      normal: '16px',
      medium: '24px',
    },
    sizes: {
      small: '8px',
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
      default: '125ms',
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
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
  media: {},
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    /** Danger solid */

    dangerSolid: redDark.red10,

    /** Backgrounds */

    appBackground: mauveDark.mauve1,
    subtleBackground: mauveDark.mauve2,

    /** Elements */

    elementBackground: mauveDark.mauve3,
    hoveredElementBackground: mauveDark.mauve4,
    activeElementBackground: mauveDark.mauve5,

    /** Separators */

    divider: mauveDark.mauve6,

    /** Borders */

    elementBorder: mauveDark.mauve7,
    hoveredElementBorder: mauveDark.mauve8,

    /** Main color */

    solid: mauveDark.mauve9,
    hoveredSolid: mauveDark.mauve10,

    /** Texts */

    lowContrast: mauveDark.mauve11,
    highContrast: mauveDark.mauve12,

    /** Primary backgrounds */

    primaryAppBackground: violetDark.violet1,
    primarySubtleBackground: violetDark.violet2,

    /** Primary elements */

    primaryElementBackground: violetDark.violet3,
    primaryHoveredElementBackground: violetDark.violet4,
    primaryActiveElementBackground: violetDark.violet5,

    /** Primary separators */

    primaryDivider: violetDark.violet6,

    /** Primary borders */

    primaryElementBorder: violetDark.violet7,
    primaryHoveredElementBorder: violetDark.violet8,

    /** Primary main color */

    primarySolid: violetDark.violet9,
    primaryHoveredSolid: violetDark.violet10,

    /** Primary texts */

    primaryLowContrast: violetDark.violet11,
    primaryHighContrast: violetDark.violet12,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    backgroundColor: '$appBackground',
    color: '$highContrast',

    fontFamily: '$default',
  },
});
