import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { PasswordRecoveryForm } from '@components/pages/password/recovery/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function PasswordRecoveryPage() {
  const t = useTranslation('password-recovery-page');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/sign/in"
      />

      <PasswordRecoveryForm />
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
