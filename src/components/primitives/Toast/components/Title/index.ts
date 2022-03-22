import * as RadixToast from '@radix-ui/react-toast';

import { styled } from '@styles/stitches.config';

export const Title = styled(RadixToast.ToastTitle, {
  gridArea: 'title',

  fontWeight: 500,

  color: '$highContrast',
  fontSize: '$medium',
});
