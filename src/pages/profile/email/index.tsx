import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { UpdateProfileEmailForm } from '@components/pages/profile/email/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function UpdateProfileEmailPage() {
  const t = useTranslation('update-profile-email');

  return (
    <Styles.Page>
      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/profile"
      />

      <UpdateProfileEmailForm />
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
