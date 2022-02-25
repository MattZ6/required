import Link from 'next/link';

import { LinkStyles as Styles } from './styles';

type Props = {
  to: string;
  locale?: string;
  children: string;
}

export function TextLink({ to, locale, children }: Props) {
  return (
    <Link href={to} locale={locale} passHref>
      <Styles.Link>{ children }</Styles.Link>
    </Link>
  );
}
