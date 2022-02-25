import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { VariantProps } from '@stitches/react';

import { FormFieldInputStyles as Styles } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof Styles.Input> & {
  label: string;
  name: string;
}

const PrimitiveInput: ForwardRefRenderFunction<HTMLInputElement, Props> =
  ({ label, ...props }, ref) => {
  return <Styles.Input ref={ref} aria-label={label} {...props} />;
}

export const FormFieldInput = forwardRef(PrimitiveInput);
