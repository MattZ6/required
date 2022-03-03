import { ProjectAuthorGithubUserStyles as Styles } from './styles';

type User = {
  html_url: string;
  avatar_url: string;
  name: string;
  login: string;
}

type Props = {
  user: User;
}

export function ProjectAuthorGithubUser({ user }: Props) {
  return (
    <Styles.Container>
      <Styles.Avatar>
        <Styles.AvatarImage
          src={user.avatar_url}
          alt={user.name}
          width={28}
          height={28}
        />
      </Styles.Avatar>

      <Styles.Name>{user.name}</Styles.Name>
    </Styles.Container>
  );
}
