import { styled } from "@styles/stitches.config";

export namespace FormStyles {
  export const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$small',
  });

  export const Actions = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    marginTop: '$small',
  });
}
