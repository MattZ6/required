import { Text } from '@components/Text'

import { styled } from '@styles/stitches.config'

export namespace ProjectStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$normal',

    width: '480px',

    paddingHorizontal: '$normal',

    '@media screen and (max-width: 1024px)': {
      width: '360px',
    },

    '@media screen and (max-width: 760px)': {
      width: 'unset',
    },
  })

  export const Description = styled(Text, {})
}
