import { styled } from '@styles/stitches.config';

export const Title = styled('strong', {
  variants: {
    as: {
      h1: {
        fontSize: '101px',
        letterSpacing: '-1.5px',
      },
      h2: {
        fontSize: '63px',
        letterSpacing: '-0.5px',
      },
      h3: {
        fontSize: '50px',
        letterSpacing: '-0.5px',
      },
      h4: {
        fontSize: '36px',
        letterSpacing: '0.25px',
      },
      h5: {
        fontSize: '25px',
        letterSpacing: '0px',
      },
      h6: {
        fontSize: '21px',
        letterSpacing: '0.15px',
      },
    },
  },
});
