import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

import { styled } from '@styles/stitches.config'

export const AlertDialogDescription = styled(RadixAlertDialog.Description, {
  fontSize: '$medium',
  lineHeight: '$medium',

  color: '$lowContrast',

  marginTop: '$small',
  marginBottom: '$medium',
})
