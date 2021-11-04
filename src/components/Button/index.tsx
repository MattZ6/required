import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  showLoader?: boolean;
};

export function Button({ children, showLoader = false, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      <span className={`${showLoader ? styles.hidden : ''}`}>{children}</span>
      {showLoader && <div className={styles.spinner}></div>}
    </button>
  );
}
