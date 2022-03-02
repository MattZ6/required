import Image from 'next/image';

import { styled } from '@styles/stitches.config';

export namespace LanguageSwitcherFlagImageStyles {
  export const Container = styled('div', {
    flexShrink: 0,

    borderRadius: '$small',
    overflow: 'hidden',

    backgroundColor: '$inputBackground',
  });

  export const Flag = styled(Image, {
    widht: '100%',
    height: '100%',

    objectFit: 'cover',

    borderRadius: 'inherit',
  });
}
