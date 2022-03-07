import { styled } from '@styles/stitches.config';

export namespace HeaderStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$smaller',
  });

  export const ButtonContainer = styled('div', {
    height: '40px',
    marginBottom: '$small',
  });
}
