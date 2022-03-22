import * as RadixToast from '@radix-ui/react-toast';

import { styled } from '@styles/stitches.config';

export const Viewport = styled(RadixToast.Viewport, {
  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  bottom: 0,
  right: 0,

  padding: '$normal',
  gap: '$small',

  width: 390,
  maxWidth: '100vw',
  margin: 0,

  listStyle: 'none',
  zIndex: 2147483647,
});
