import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { GithubRepositoryLinkStyles as Styles } from './styles';

export function GithubRepositoryLink() {
  return (
    <Link href="https://github.com/MattZ6/authentication-app-web" passHref>
      <Styles.Link rel="noreferrer noopener nofollow" target="_blank">
        <FaGithub />
      </Styles.Link>
    </Link>
  );
}
