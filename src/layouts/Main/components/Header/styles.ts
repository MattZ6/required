import { styled } from '@styles/stitches.config';

import { CenterContent } from '@components/CenterContent';

export namespace MainLayoutHeader {
  export const Header = styled('header', {
    paddingVertical: '$normal',

    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '$divider',
  });

  export const Content = styled(CenterContent, {
    display: 'flex',
    alignItems: 'center',
    gap: '$normal',
  });

  export const Right = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    marginLeft: 'auto',
  });
}
