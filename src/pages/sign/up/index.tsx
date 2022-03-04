import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { useTranslation } from '@hooks/useTranslation';

import { PageHeader } from '@components/pages/components';
import { Text } from '@components/Text';

import { CommonPageStyles as Styles } from '@components/pages/styles';

import { SignInLink, SignUpForm } from '@components/pages/sign/up';


export default function SignIn() {
  const t = useTranslation('sign-up');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/sign/in"
      />

      <SignUpForm />

      <Text>{t('footer.text')}... <SignInLink /></Text>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: { }
  }
});
