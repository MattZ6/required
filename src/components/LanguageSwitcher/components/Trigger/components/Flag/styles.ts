import Image from 'next/image';
import { styled } from "@styles/stitches.config";

export namespace LanguageSwitcherTriggerFlagImageStyles {
  export const Container = styled('div', {
    flexShrink: 0,

    width: '24px',
    height: '18px',
    borderRadius: '$small',
    overflow: 'hidden',
  });

  export const Flag = styled(Image, {
    widht: '100%',
    height: '100%',

    objectFit: 'cover',

    borderRadius: 'inherit',
  });
}
