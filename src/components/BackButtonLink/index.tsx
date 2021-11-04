import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

import styles from './styles.module.scss';

type BackButtonLinkProps = {
  to: string;
}

export function BackButtonLink({ to }: BackButtonLinkProps) {
  return (
    <Link href={to}>
      <a className={styles.container}>
        <IoArrowBack size={24} />
      </a>
    </Link>
  );
}
