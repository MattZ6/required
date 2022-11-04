import * as RadixToast from '@radix-ui/react-toast'

import { styled } from '@styles/stitches.config'

export const Description = styled(RadixToast.ToastDescription, {
  gridArea: 'description',
  margin: 0,
  color: '$lowContrast',
  fontSize: '$normal',
  lineHeight: '$normal',
})
