import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import {
  ProfileAvatar as Avatar,
  ProfileContent as Content,
} from '@components/pages/profile';
import { CommonPageStyles as Styles } from '@components/pages/styles';
import { Text } from '@components/Text';
import { Title } from '@components/Title';

export default function ProfilePage() {
  return (
    <Styles.Page>
      <Avatar />

      <div>
        <Text>How are you today?</Text>
        <Title as="h4">Hello, Matheus</Title>
      </div>

      <Content />

      <button type="button">Sair</button>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
