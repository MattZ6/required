import { VariantProps } from '@stitches/react';
import { ButtonHTMLAttributes } from 'react';

import { LoadingSpinner } from '@components/Spinner';

import { FormButtonStyles as Styles } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof Styles.Button> & {
    children: string;
  };

export function FormButton({
  children,
  showLoading = false,
  ...props
}: ButtonProps) {
  return (
    <Styles.Button
      aria-disabled={props.disabled}
      showLoading={showLoading}
      {...props}
    >
      {children}

      {showLoading && (
        <Styles.LoadingContainer>
          <LoadingSpinner />
        </Styles.LoadingContainer>
      )}
    </Styles.Button>
  );
}
