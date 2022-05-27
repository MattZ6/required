import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { GithubRepositoryLinkStyles as Styles } from './styles';

export function GithubRepositoryLink() {
  return (
    <Link href="https://github.com/MattZ6/auth-flow" passHref>
      <Styles.Link
        rel="noreferrer noopener nofollow"
        target="_blank"
        aria-label="Go to project repository on Github"
      >
        <FaGithub />
      </Styles.Link>
    </Link>
  );
}
