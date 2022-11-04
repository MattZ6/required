import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

import { styled } from '@styles/stitches.config'

export const AlertDialogOverlay = styled(RadixAlertDialog.Overlay, {
  width: '100vw',
  height: '100vh',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.45)',
})
