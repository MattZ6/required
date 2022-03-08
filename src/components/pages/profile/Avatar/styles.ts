import { styled } from '@styles/stitches.config';

export namespace ProfileAvatarStyles {
  export const Container = styled('div', {
    $$size: '64px',

    size: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$elementBackground',
  });
}
