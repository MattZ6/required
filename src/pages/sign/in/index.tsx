import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { useTranslation } from '@hooks/useTranslation';

import { PageHeader } from '@components/pages/components';
import { Text } from '@components/Text';

import { CommonPageStyles as Styles } from '@components/pages/styles';

import { CreateAccountLink, SignInForm } from '@components/pages/sign/in';

export default function SignIn() {
  const t = useTranslation('sign-in');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
      />

      <SignInForm />

      <Text>{t('footer.text')} <CreateAccountLink /></Text>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: { }
  }
});
