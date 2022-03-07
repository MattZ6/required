import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { UpdateProfilePasswordForm } from '@components/pages/profile/password/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function UpdateProfilePasswordPage() {
  const t = useTranslation('update-profile-password');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/profile"
      />

      <UpdateProfilePasswordForm />
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
