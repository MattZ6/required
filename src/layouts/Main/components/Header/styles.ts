import { CenterContent } from '@components/CenterContent';

import { styled } from '@styles/stitches.config';

export namespace MainLayoutHeader {
  export const Header = styled('header', {
    paddingVertical: '$normal',

    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '$divider',

    position: 'sticky',
    top: 0,
    backdropFilter: 'blur(8px)',
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
