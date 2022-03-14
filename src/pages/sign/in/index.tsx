import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import {
  ForgotPasswordLink,
  LinksContainer,
  PageHeader,
} from '@components/pages/components';
import { CreateAccountLink, SignInForm } from '@components/pages/sign/in';
import { CommonPageStyles as Styles } from '@components/pages/styles';
import { SEO } from '@components/SEO';
import { Text } from '@components/Text';

export default function SignInPage() {
  const t = useTranslation('sign-in');

  return (
    <Styles.Page>
      <SEO
        title={t('title')}
        description={t('description')}
        icon={{ path: '/favicon.png', type: 'image/png' }}
        image="/assets/seo/pages/profile.png"
      />

      <PageHeader title={t('title')} description={t('description')} />

      <SignInForm />

      <LinksContainer>
        <Text>
          <ForgotPasswordLink />
        </Text>

        <Text>
          {t('footer.text')} <CreateAccountLink />
        </Text>
      </LinksContainer>
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
