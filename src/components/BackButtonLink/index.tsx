import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

import styles from './styles.module.scss';

type BackButtonLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to: string;
}

export function BackButtonLink({ to, ...rest }: BackButtonLinkProps) {
  return (
    <Link href={to} passHref>
      <button className={styles.container} {...rest}>
        <IoArrowBack size={24} />
      </button>
    </Link>
  );
}
