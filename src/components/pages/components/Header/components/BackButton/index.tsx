import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdChevronLeft } from 'react-icons/md';

import { BackButtonStyles as Styles } from "./styles";

type Props = {
  to: string;
}

export function BackButton({ to }: Props) {
  const { locale } = useRouter();

  return (
    <Link href={to} passHref locale={locale}>
      <Styles.Button>
        <MdChevronLeft />
      </Styles.Button>
    </Link>
  );
}
