import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

import { styled } from '@styles/stitches.config'

export const AlertDialogContent = styled(RadixAlertDialog.Content, {
  display: 'flex',
  flexDirection: 'column',

  padding: '$medium',
  paddingTop: '$normal',
  backgroundColor: '$appBackground',

  borderRadius: '$normal',

  width: '90vw',
  maxWidth: '480px',
  height: 'fit-content',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})
