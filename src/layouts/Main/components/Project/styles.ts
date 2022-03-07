import { Text } from '@components/Text';

import { styled } from '@styles/stitches.config';

export namespace ProjectStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$normal',

    width: '480px',

    paddingHorizontal: '$normal',
  });

  export const Description = styled(Text, {});
}
