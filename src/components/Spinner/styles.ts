import { styled, keyframes } from '@styles/stitches.config'

export namespace LoadingSpinnerStyles {
  const rotate = keyframes({
    '100%': { transform: 'rotate(360deg)' },
  })

  const dash = keyframes({
    '0%': { strokeDasharray: '1, 150', strokeDashoffset: 0 },
    '50%': { strokeDasharray: '90, 150', strokeDashoffset: -35 },
    '100%': { strokeDasharray: '90, 150', strokeDashoffset: -124 },
  })

  export const Svg = styled('svg', {
    width: '24px',
    height: '24px',

    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: `${rotate}`,
  })

  export const Circle = styled('circle', {
    stroke: '$lowContrast',
    strokeLinecap: 'round',

    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: `${dash}`,
  })
}
