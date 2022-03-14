import { useProfile } from '@services/user/profile/getProfile';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import {
  ProfileActions,
  ProfileAvatar as Avatar,
  ProfileContent as Content,
  ProfileSignOutButton as SignOutButton,
  ProfileTitle as Title,
} from '@components/pages/profile';
import { CommonPageStyles as Styles } from '@components/pages/styles';
import { SEO } from '@components/SEO';

function Body() {
  const { isLoading, isError, data } = useProfile();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Styles.Page>
      <Avatar />

      <Title />

      <Content profile={data!} />

      <ProfileActions.Actions>
        <SignOutButton />
      </ProfileActions.Actions>
    </Styles.Page>
  );
}

export default function ProfilePage() {
  return (
    <>
      <SEO
        title="Profile"
        icon={{ path: '/profile.png', type: 'image/png' }}
        image="/assets/seo/pages/profile.png"
      />

      <Body />
    </>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
