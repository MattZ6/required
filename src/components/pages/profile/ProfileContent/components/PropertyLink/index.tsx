import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { MdEdit } from 'react-icons/md';

import { PropertyLinkStyles as Styles } from './styles';

type Props = {
  trailingIcon: IconType;
  label: string;
  value: string;
  to: string;
};

export function PropertyLink({ trailingIcon: Icon, label, value, to }: Props) {
  const { locale } = useRouter();

  return (
    <Link href={to} passHref locale={locale}>
      <Styles.Button>
        <Icon />

        <Styles.Content>
          <Styles.Label>{label}</Styles.Label>
          <Styles.Text>{value}</Styles.Text>
        </Styles.Content>

        <MdEdit />
      </Styles.Button>
    </Link>
  );
}
