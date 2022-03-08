import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { PasswordResetForm } from '@components/pages/password/reset/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function PasswordResetPage() {
  const t = useTranslation('password-reset-page');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/sign/in"
      />

      <PasswordResetForm />
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
