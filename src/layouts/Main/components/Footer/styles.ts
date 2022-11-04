import { CenterContent } from '@components/CenterContent'

import { styled } from '@styles/stitches.config'

export namespace MainLayoutFooterStyles {
  export const Footer = styled('footer', {
    paddingVertical: '$normal',
  })

  export const Content = styled(CenterContent, {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '$normal',
  })

  export const RightContainer = styled('div', {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '$normal',

    marginLeft: 'auto',
  })
}
