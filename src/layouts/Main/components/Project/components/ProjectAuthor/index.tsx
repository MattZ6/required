import { useEffect, useState } from 'react';

import {
  ProjectAuthorGithubUser as User,
  ProjectAuthorGithubLink as Link,
} from './components';
import { ProjectAuthorStyles as Styles } from './styles';

type User = {
  html_url: string;
  avatar_url: string;
  name: string;
  login: string;
};

export function ProjectAuthor() {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    fetch('https://api.github.com/users/mattz6')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Styles.Container>
      <User user={user} />

      <Link to={user.html_url} />
    </Styles.Container>
  );
}
