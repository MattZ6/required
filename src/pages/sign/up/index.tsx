import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import {
  ForgotPasswordLink,
  LinksContainer,
  PageHeader,
} from '@components/pages/components';
import { SignInLink, SignUpForm } from '@components/pages/sign/up';
import { CommonPageStyles as Styles } from '@components/pages/styles';
import { Text } from '@components/Text';

export default function SignUpPage() {
  const t = useTranslation('sign-up');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/sign/in"
      />

      <SignUpForm />

      <LinksContainer>
        <Text>
          <ForgotPasswordLink />
        </Text>

        <Text>
          {t('footer.text')}... <SignInLink />
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
