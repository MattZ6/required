import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

import { styled } from '@styles/stitches.config'

export const AlertDialogCancel = styled(RadixAlertDialog.Cancel, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  minWidth: '100px',
  height: '42px',

  paddingHorizontal: '$normal',

  border: 'none',
  borderRadius: '$normal',

  fontSize: '$normal',
  lineHeight: '$normal',
  fontWeight: 'bold',
  letterSpacing: '0.5px',

  cursor: 'pointer',

  backgroundColor: '$elementBackground',
  color: '$highContrast',

  outlineWidth: 2,
  outlineStyle: 'solid',
  outlineColor: 'transparent',

  transitionAnimation: 'color, background-color, outline-color',

  '&:hover': {
    backgroundColor: '$hoveredElementBackground',
    color: '$highContrast',
  },

  '&:focus-visible': {
    backgroundColor: '$hoveredElementBackground',
    color: '$highContrast',
    outlineColor: '$hoveredElementBorder',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$elementBackground',
    color: '$lowContrast',
  },
})
