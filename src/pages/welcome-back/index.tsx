import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { useTranslation } from '@hooks/useTranslation';

import { PageHeader } from '@components/pages/components';
import { Text } from '@components/Text';

import { CommonPageStyles as Styles } from '@components/pages/styles';

import { SignInLink, WelcomeBackForm } from '@components/pages/welcome-back';

export default function WelcomeBackPage() {
  const t = useTranslation('welcome-back');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title', { firstName: 'User' })}
        description={t('description')}
      />

      <WelcomeBackForm />

      <Text><SignInLink /></Text>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: { }
  }
});
