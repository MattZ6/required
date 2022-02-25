import { styled, keyframes } from "@styles/stitches.config";

export namespace FormFieldErrorStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',

    paddingHorizontal: '$normal',
    minHeight: '$lineHeights$medium',
  });

  const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

  export const Error = styled('small', {
    fontSize: '$normal',
    lineHeight: '$normal',

    color: '$danger',
    fontWeight: '600',

    animation: `${slideUp} 150ms ease-out`,
  });
}
