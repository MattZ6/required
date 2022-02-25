import { styled } from "@styles/stitches.config";

export namespace FormFieldLabelStyles {
  export const Label = styled('small', {
    position: 'absolute',
    top: '4px',
    left: '$normal',

    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: 'bold',

    userSelect: 'none',
    pointerEvents: 'none',

    transitionAnimation: 'color',
  });
}
