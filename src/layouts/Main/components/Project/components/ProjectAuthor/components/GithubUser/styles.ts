import Image from 'next/image';

import { styled } from '@styles/stitches.config';

export namespace ProjectAuthorGithubUserStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    height: '40px',
    borderRadius: '$normal',
    paddingHorizontal: '$small',

    backgroundColor: '$elementBackground',
  });

  export const Avatar = styled('div', {
    $$size: '28px',

    size: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$subtleBackground',
  });

  export const AvatarImage = styled(Image, {
    $$size: 'inherit',

    size: '$$size',
    borderRadius: '$$size',

    objectFit: 'cover',
  });

  export const Name = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$normal',
  });
}
