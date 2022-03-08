import { VariantProps } from '@stitches/react';
import { ButtonHTMLAttributes } from 'react';

import { FormButtonStyles as Styles } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof Styles.Button> & {
    children: string;
  };

export function FormButton({ children, ...props }: ButtonProps) {
  return <Styles.Button {...props}>{children}</Styles.Button>;
}
