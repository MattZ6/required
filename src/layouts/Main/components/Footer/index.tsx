import { useMemo } from 'react';

import { LanguageSwitcher } from '@components/LanguageSwitcher';
import { ThemeSwitcher } from '@components/ThemeSwitcher';

import { GithubRepositoryLink as RepoLink } from './components';

import { MainLayoutFooterStyles as Styles } from './styles';

export function Footer() {
  return (
    <Styles.Footer>
      <Styles.Content>

        <RepoLink />

        <Styles.RightContainer>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Styles.RightContainer>
      </Styles.Content>
    </Styles.Footer>
  );
}

function Copyright() {
  const now = useMemo(() => new Date(), []);

  return (
    <address>
      <small>
        Matheus Felipe Zanin © { now.getFullYear() }
      </small>
    </address>
  );
}
