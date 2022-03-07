import { ButtonHTMLAttributes } from 'react';

import { FormButtonStyles } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

export function FormButton({ children, ...props }: ButtonProps) {
  return (
    <FormButtonStyles.Button {...props}>{children}</FormButtonStyles.Button>
  );
}
