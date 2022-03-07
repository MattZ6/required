import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { ProjectAuthorGithubLinkStyles as Styles } from './styles';

type Props = {
  to: string;
};

export function ProjectAuthorGithubLink({ to }: Props) {
  return (
    <Link href={to} passHref>
      <Styles.Button target="_blank" rel="noopener noreferrer nofollow">
        <FaGithub />
      </Styles.Button>
    </Link>
  );
}
