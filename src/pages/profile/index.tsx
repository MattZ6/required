import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import {
  ProfileActions,
  ProfileAvatar as Avatar,
  ProfileContent as Content,
  ProfileSignOutButton as SignOutButton,
  ProfileTitle as Title,
} from '@components/pages/profile';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function ProfilePage() {
  return (
    <Styles.Page>
      <Avatar />

      <Title />

      <Content />

      <ProfileActions.Actions>
        <SignOutButton />
      </ProfileActions.Actions>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
